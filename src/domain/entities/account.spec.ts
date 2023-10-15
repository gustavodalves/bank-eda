import Account from "./account"

describe('account', () => {
    it('should be able create account', () => {
        const account = Account.create({
            agency: '0000',
            taxId: '06453520000136'
        })

        expect(account).toBeInstanceOf(Account)
        expect(account.getEvents()).toHaveLength(1)
        expect(account.agency.value).toBe('0000')
        expect(account.taxId.getValue()).toBe('06453520000136')
    })


    it('should be able calculate balance', () => {
        const account = Account.create({
            agency: '0000',
            taxId: '06453520000136'
        })

        const creditValue = 1000
        const debitValue = 100

        account.credit(creditValue)
        account.debit(debitValue)

        expect(account.getBalance()).toBe(creditValue - debitValue)
    })

    it('should not be able create debit with balance equals 0', () => {
        const account = Account.create({
            agency: '0000',
            taxId: '06453520000136'
        })

        const debitValue = 100

        expect(() => account.debit(debitValue)).toThrow('balance is less than value')
    })

    it('should be able create debit transaction', () => {
        const account = Account.create({
            agency: '0000',
            taxId: '06453520000136'
        })

        const debitValue = 100

        expect(() => account.debit(debitValue)).toThrow('balance is less than value')
    })
})
