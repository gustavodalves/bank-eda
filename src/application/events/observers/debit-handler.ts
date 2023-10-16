
import AccountRepository from "../../../domain/repository/account";
import DebitCommand from "../application-events/debit-event";
import Observer from "../observer-command";

export default class DebitHandler implements Observer {
    listenEvent: string = 'Debit';

    constructor(
        private readonly accountRepository: AccountRepository
    ) {}

    async notify(debitCommand: DebitCommand): Promise<void> {
        const account = await this.accountRepository.getById(debitCommand.accountId)

        if(!account) throw new Error('account not founded')
        account.debit(debitCommand.value)

        await this.accountRepository.save(account)
    }
}