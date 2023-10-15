import Command from "../../application/events/application-events/command";
import CommandMediator from "../../application/events/mediator-command";
import Observer from "../../application/events/observer-command";

export default class Mediator implements CommandMediator {
    observers: Observer[];

    constructor () {
        this.observers = [];
    }

    register(observer: Observer) {
        this.observers.push(observer);
    }

    publish(command: Command) {
        for (const observer of this.observers) {
            if (observer.operation === command.operation) {
                observer.notify(command);
            }
        }
    }
}
