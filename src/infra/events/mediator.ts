import Mediator from "../../application/events/mediator";
import DomainEvent from "../../domain/building/domain-event";
import Handler from "../../application/events/handlers/protocol";

export default class ConcretMediator implements Mediator {
	handlers: Handler[] = [];

	register (handler: Handler) {
		this.handlers.push(handler);
	}

	publish (event: DomainEvent) {
		for (const handler of this.handlers) {
			if (handler.eventName === event.eventName) {
				handler.handle(event);
			}
		}
	}
}
