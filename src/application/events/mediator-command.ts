import Command from "./application-events/command";
import Observer from "./observer-command";

export default interface CommandMediator {
	register (observer: Observer): void
	publish (command: Command): void
}
