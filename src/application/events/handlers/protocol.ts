import DomainEvent from "../../../domain/building/domain-event";

export default interface Handler {
    eventName: string
    handle(event: DomainEvent): Promise<void>
}
