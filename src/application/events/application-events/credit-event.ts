import ApplicationEvent from "./application-event";

export default class CreditApplicationEvent implements ApplicationEvent {
    eventName = 'Credit';
    occurredOn = new Date()

    constructor(
        readonly accountId: string,
        readonly value: number
    ) {}
}
