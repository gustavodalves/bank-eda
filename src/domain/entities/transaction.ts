import Entity from "../building/entity";
import Id from "../building/object-values/id";

export enum TransactionType {
    'debit',
    'credit'
}

class TransactionId extends Id {}

export default abstract class Transaction extends Entity {
    constructor(
        readonly value: number,
        readonly transactionType: TransactionType,
        id?: TransactionId,
    ) {
        super(
            id || new TransactionId()
        )
    }

    abstract calculate(total: number): number
}

export class TransactionDebit extends Transaction {
    constructor(
        value: number,
        id?: TransactionId,
    ) {
        super(value, TransactionType.debit, id)
    }

    calculate(total: number): number {
        return total - this.value
    }
}

export class TransactionCredit extends Transaction {
    constructor(
        value: number,
        id?: TransactionId,
    ) {
        super(value, TransactionType.credit, id)
    }

    calculate(total: number): number {
        return total + this.value
    }
}
