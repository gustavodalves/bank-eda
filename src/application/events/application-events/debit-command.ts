import Command from "./command";

export default class DebitCommand implements Command{
    operation = 'AccountDebit';

    constructor(
        readonly accountId: string,
        readonly value: number
    ) {}
}
