import Command from "../../helpers/command";
import Account from "../entities/account";

class TransferCommand implements Command {
    constructor(
        private readonly from: Account,
        private readonly to: Account,
        private readonly value: number
    ) {}

    do() {
        this.from.debit(this.value)
        this.to.credit(this.value)
    }

    undo() {
        this.from.credit(this.value)
        this.to.debit(this.value)
    }
}

export default class TransferService {
    transfe(
        from: Account,
        to: Account,
        value: number
    ) {
        const command = new TransferCommand(from, to, value)
        try {
            command.do()
        } catch(err) {
            command.undo()
        }
    }
}
