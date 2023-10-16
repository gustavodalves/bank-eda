import Account from "../../domain/entities/account";
import AccountRepository from "../../domain/repository/account";
import CreditCommand from "../events/application-events/credit-event";
import DebitCommand from "../events/application-events/debit-event";
import TransferCommand from "../events/application-events/transfer-event";
import Mediator from "../events/mediator-command";

export default class AccountService {
    constructor(
        private readonly accountRepository: AccountRepository,
        private readonly mediator: Mediator,
    ) {}

    async createAccount(input: {
        agency: string,
        taxId: string
    }) {
        const account = Account.create({
            agency: input.agency,
            taxId: input.taxId
        })

        await this.accountRepository.save(account)
    }

    credit(accountId: string, amount: number) {
        const creditCommand = new CreditCommand(accountId, amount);
        this.mediator.publish(creditCommand);
    }

    debit(accountId: string, amount: number) {
        const debitCommand = new DebitCommand(accountId, amount);
        this.mediator.publish(debitCommand);
    }

    transfer(accountIdFrom: string, accountIdTo: string, amount: number) {
        const transferCommand = new TransferCommand(accountIdFrom, accountIdTo, amount);
        this.mediator.publish(transferCommand);
    }

    async getById(accountId: string) {
        const account = await this.accountRepository.getById(accountId)

        if(!account) throw new Error('account not founded')

        return account
    }

    async getByTaxId(accountTaxId: string) {
        const account = await this.accountRepository.getByTaxId(accountTaxId)

        if(!account) throw new Error('account not founded')

        return account
    }
}
