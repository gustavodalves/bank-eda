import Command from "./application-events/command";

export default interface Observer {
    operation: string
    notify(event: Command): void;
}
