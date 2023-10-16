import ApplicationEvent from "./application-events/application-event";

export default interface Observer {
    listenEvent: string

    notify(event: ApplicationEvent): void;
}
