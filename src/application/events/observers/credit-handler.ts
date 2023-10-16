import AccountRepository from "../../../domain/repository/account";
import CreditApplicationEvent from "../application-events/credit-event";
import Observer from "../observer-command";

export default class CreditHandler implements Observer {
    listenEvent: string = 'Credit';

    constructor(
        private readonly accountRepository: AccountRepository
    ) {}

    async notify(event: CreditApplicationEvent): Promise<void> {
        const account = await this.accountRepository.getById(event.accountId)

        if(!account) throw new Error('account not founded')
        account.credit(event.value)

        await this.accountRepository.update(account)
    }
}