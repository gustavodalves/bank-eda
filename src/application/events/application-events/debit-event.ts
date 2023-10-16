import ApplicationEvent from "./application-event";

export default class DebitApplicationEvent implements ApplicationEvent {
    eventName = 'Debit';
    occurredOn = new Date()

    constructor(
        readonly accountId: string,
        readonly value: number
    ) {}
}
