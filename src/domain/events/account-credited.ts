import DomainEvent from "../building/domain-event"
import Id from "../building/object-values/id"

export default class AccountCredited implements DomainEvent {
    occuredOn: Date = new Date()
    eventName: string = 'AccountCredited'
    constructor(
        readonly aggregateId: Id,
        readonly transactionId: Id,
        readonly value: number,
    ) {} 
}
