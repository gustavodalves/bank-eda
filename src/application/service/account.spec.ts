import Mediator from "../../infra/events/mediator";
import FakeAccountRepository from "../../infra/repositories/fake-account-repository";
import CreditHandler from "../events/observers/credit-handler";
import DebitHandler from "../events/observers/debit-handler";
import TransferHandler from "../events/observers/transfer-handler";
import AccountService from "./account"

describe('account service', () => {
    it('shoud be able create account', async () => {
        const mediator = new Mediator();
        const accountRepository = new FakeAccountRepository()

        mediator.register(new CreditHandler(accountRepository));
        mediator.register(new DebitHandler(accountRepository));
        mediator.register(new TransferHandler(accountRepository));

        const service = new AccountService(
            accountRepository, mediator
        )

        await service.createAccount({
            agency: '00001',
            taxId: '22000000000103'
        })

        const account = await accountRepository.getByTaxId('22000000000103')
        expect(account?.taxId).toBe('22000000000103')
    })

    it('shoud be able create account and transfer operation', async () => {
        const mediator = new Mediator();
        const accountRepository = new FakeAccountRepository()

        mediator.register(new CreditHandler(accountRepository));
        mediator.register(new DebitHandler(accountRepository));
        mediator.register(new TransferHandler(accountRepository));

        const service = new AccountService(
            accountRepository, mediator
        )

        await service.createAccount({
            agency: '00001',
            taxId: '22000000000103'
        })

        await service.createAccount({
            agency: '00001',
            taxId: '22000000000101'
        })

        const accountFrom = await accountRepository.getByTaxId('22000000000103')
        const accountTo = await accountRepository.getByTaxId('22000000000101')
       
        service.credit(accountFrom!.id.getValue(), 500)
        service.transfer(accountFrom!.id.getValue(), accountTo!.id.getValue(), 1000)
    })
})