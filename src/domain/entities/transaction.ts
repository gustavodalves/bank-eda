import Entity from "../building/entity";
import Id from "../building/object-values/id";

export enum TransactionType {
    'debit',
    'credit'
}

class TransactionId extends Id {}

export default class Transaction extends Entity {
    private calculateStrategy: CalculateStrategy

    constructor(
        readonly value: number,
        readonly transactionType: TransactionType,
        id?: TransactionId,
    ) {
        super(
            id || new TransactionId()
        )
        this.calculateStrategy = CalculateStrategyFactory.create(this.transactionType)
    }

    calculate(total: number) { return this.calculateStrategy.calculate(total, this.value) }
}

interface CalculateStrategy {
    calculate(total: number, value: number): number
}

class DebitCalculateStrategy implements CalculateStrategy {
    calculate(total: number, value: number ) { return total - value}
}

class CreditCalculateStrategy implements CalculateStrategy {
    calculate(total: number, value: number ) { return total + value}
}

class CalculateStrategyFactory {
    static create(
        type: TransactionType
    ) {
        if(type === TransactionType.debit) return new DebitCalculateStrategy()
        else if(type === TransactionType.credit) return new CreditCalculateStrategy()

        throw new Error('transaction type not exists')
    }
}
