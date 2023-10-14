import Transaction, { TransactionType } from "./transaction"

describe('Transaction', () => {
    it('should be calculate transaction credit', () => {
        const transaction = new Transaction(
            100,
            TransactionType.credit
        )

        const balance = 1000
        expect(transaction.calculate(balance)).toBe(1100)
    })

    it('should be calculate transaction dedit', () => {
        const transaction = new Transaction(
            100,
            TransactionType.debit
        )

        const balance = 1000
        expect(transaction.calculate(balance)).toBe(900)
    })
})