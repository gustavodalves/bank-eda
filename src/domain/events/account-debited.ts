import DomainEvent from "../building/domain-event"
import Id from "../building/object-values/id"

export default class AccountDebited implements DomainEvent {
    occuredOn: Date = new Date()
    eventName: string = 'AccountDebited'
    constructor(
        readonly aggregateId: Id,
        readonly transactionId: Id,
        readonly value: number,
    ) {} 
}
