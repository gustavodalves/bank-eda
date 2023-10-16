import Command from "./application-event";

export default class TransferCommand implements Command{
    eventName = 'Transfer';
    occurredOn = new Date()

    constructor(
        readonly accountFromId: string,
        readonly accountToId: string,
        readonly value: number
    ) {}
}
