import Command from "./command";

export default class CreditCommand implements Command{
    operation = 'AccountCredit';

    constructor(
        readonly accountId: string,
        readonly value: number
    ) {}
}
