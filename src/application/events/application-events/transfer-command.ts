import Command from "./command";

export default class TransferCommand implements Command{
    operation = 'AccountTransfer';

    constructor(
        readonly accountFromId: string,
        readonly accountToId: string,
        readonly value: number
    ) {}
}
