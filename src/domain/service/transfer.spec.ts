import Account from "../entities/account"
import TransferService from "./transfer"

describe('Transfer', () => {
    it('should be transfer', () => {
        const accountFrom = Account.create({
            agency: '0001',
            taxId: '10090090000103'
        })

        accountFrom.credit(1000)

        const accountTo = Account.create({
            agency: '0001',
            taxId: '10090090000101'
        })

        const transfer = new TransferService()
        transfer.transfe(
            accountFrom, accountTo, 200
        )

        expect(accountFrom.getBalance()).toBe(800)
        expect(accountTo.getBalance()).toBe(200)
    })
})