import DomainEvent from "../../domain/building/domain-event";
import Handler from "./handlers/protocol";

export default interface Mediator {
	handlers: Handler[]
	register (handler: Handler): void
	publish (event: DomainEvent): void
}
