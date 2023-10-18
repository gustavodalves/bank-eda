import AccountNumber from "./account-number";
import Agency from "./agency";
import AggregateRoot from "../building/aggregate";
import Id from "../building/object-values/id";
import TaxId from "../building/object-values/tax-id";
import Transaction, { TransactionCredit, TransactionDebit, TransactionType } from "./transaction";
import AccountCreated from "../events/account-created";
import AccountCredited from "../events/account-credited";
import AccountDebited from "../events/account-debited";

class AccountId extends Id {}

type AccountCommandCreate = {
    taxId: string
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
        private _transactions: Transaction[],
    ) {
        super(id)
    }

    updateTransactions(transactions: Transaction[]) {
        this._transactions = transactions
    }

    get transactions() {
        return this._transactions
    }

    static create(
        props: AccountCommandCreate
    ) {
        const account = new Account(
            new AccountId(),
            new TaxId(props.taxId),
            new AccountNumber(),
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
        const transaction = new TransactionCredit(
            value
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

        const transaction = new TransactionDebit(
            value
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
