import AccountRepository from "../../../domain/repository/account";
import CreditCommand from "../application-events/credit-command";
import Observer from "../observer-command";

export default class CreditHandler implements Observer {
    operation = 'AccountCredit';

    constructor(
        private readonly accountRepository: AccountRepository
    ) {}

    async notify(creditCommand: CreditCommand): Promise<void> {
        const account = await this.accountRepository.getById(creditCommand.accountId)

        if(!account) throw new Error('account not founded')
        account.credit(creditCommand.value)

        await this.accountRepository.save(account)
    }
}