import Transaction, { TransactionCredit, TransactionDebit, TransactionType } from "./transaction"

describe('Transaction', () => {
    it('should be calculate transaction credit', () => {
        const transaction = new TransactionCredit(
            100
        )

        const balance = 1000
        expect(transaction.calculate(balance)).toBe(1100)
    })

    it('should be calculate transaction dedit', () => {
        const transaction = new TransactionDebit(
            100,
        )

        const balance = 1000
        expect(transaction.calculate(balance)).toBe(900)
    })
})