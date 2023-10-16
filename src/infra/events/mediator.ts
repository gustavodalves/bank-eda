import ApplicationEvent from "../../application/events/application-events/application-event";
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

    publish(event: ApplicationEvent) {
        for (const observer of this.observers) {
            if (observer.listenEvent === event.eventName) {
                observer.notify(event);
            }
        }
    }
}
