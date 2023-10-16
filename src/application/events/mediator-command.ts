import ApplicationEvent from "./application-events/application-event";
import Observer from "./observer-command";

export default interface CommandMediator {
	register (observer: Observer): void
	publish (event: ApplicationEvent): void
}
