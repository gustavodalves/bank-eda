import Id from "./object-values/id"

export default interface DomainEvent {
    eventName: string
    aggregateId: Id
    occuredOn: Date
}
