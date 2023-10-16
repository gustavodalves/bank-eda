
import AccountRepository from "../../../domain/repository/account";
import TransferService from "../../../domain/service/transfer";
import TransferCommand from "../application-events/transfer-event";
import Observer from "../observer-command";

export default class TransferHandler implements Observer {
    listenEvent: string = 'Transfer';

    constructor(
        private readonly accountRepository: AccountRepository
    ) {}

    async notify(trasnferCommand: TransferCommand): Promise<void> {
        const accountFrom = await this.accountRepository.getById(trasnferCommand.accountFromId)
        const accountTo = await this.accountRepository.getById(trasnferCommand.accountToId)

        if(!accountFrom || !accountTo) throw new Error(`account id not found`)

        const transfer = new TransferService()
        transfer.transfe(
            accountFrom,
            accountTo,
            trasnferCommand.value
        )

        // uow pattern is the best option for this case
        await this.accountRepository.save(accountFrom)
        await this.accountRepository.save(accountTo)
    }
}