import DomainEvent from "./domain-event";
import Entity from "./entity";

export default class AggregateRoot extends Entity {
    private events: DomainEvent[] = []

    getEvents() {
        return this.events
    }

    addEvent(event: DomainEvent) {
        this.getEvents().push(event)
    }

    clearEvents() {
        this.events = []
    }
}
