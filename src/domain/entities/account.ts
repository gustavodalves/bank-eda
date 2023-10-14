import AccountNumber from "./account-number";
import Agency from "./agency";
import AggregateRoot from "../building/aggregate";
import Id from "../building/object-values/id";
import TaxId from "../building/object-values/tax-id";
import Transaction, { TransactionType } from "./transaction";
import AccountCreated from "../events/account-created";
import AccountCredited from "../events/account-credited";
import AccountDebited from "../events/account-debited";

class AccountId extends Id {}

type AccountCommandCreate = {
    taxId: string
    accountNumber: string
    agency: string
}

type AccountCommandRecover = {
    id: string
    taxId: string
    accountNumber: string
    agency: string
    transactions: Transaction[]
}

export default class Account extends AggregateRoot {
    private constructor(
        id: AccountId,
        readonly taxId: TaxId,
        readonly accountNumber: AccountNumber,
        readonly agency: Agency,
        readonly transactions: Transaction[],
    ) {
        super(id)
    }

    static create(
        props: AccountCommandCreate
    ) {
        const account = new Account(
            new AccountId(),
            new TaxId(props.taxId),
            new AccountNumber(props.accountNumber),
            new Agency(props.agency),
            []
        )

        account.addEvent(
            new AccountCreated(account.id, account.taxId, account.accountNumber, account.agency, account.transactions)
        )

        return account
    }

    static recover(props: AccountCommandRecover) {
        return new Account(
            new AccountId(props.id),
            new TaxId(props.taxId),
            new AccountNumber(props.accountNumber),
            new Agency(props.agency),
            props.transactions
        )
    }

    credit(
        value: number
    ) {
        const transaction = new Transaction(
            value,
            TransactionType.credit
        )

        this.transactions.push(
            transaction
        )

       this.addEvent(
            new AccountCredited(this.id, transaction.id, transaction.value)
        )
    }

    debit(
        value: number
    ) {
        if(this.getBalance() < value) throw new Error('balance is less than value')

        const transaction = new Transaction(
            value,
            TransactionType.debit
        )

        this.transactions.push(
            transaction
        )

       this.addEvent(
            new AccountDebited(this.id, transaction.id, transaction.value)
        )
    }

    getBalance() {
        return this.transactions.reduce((acc, item) => 
            item.calculate(acc)
        , 0)
    }
}
