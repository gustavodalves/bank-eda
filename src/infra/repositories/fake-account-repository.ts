import Account from "../../domain/entities/account";
import AccountRepository from "../../domain/repository/account";

export default class FakeAccountRepository implements AccountRepository {
    readonly data: Account[] = []

    async getById(id: string): Promise<Account | undefined> {
        return this.data.find(item => item.id.getValue() === id)
    }

    async getByTaxId(taxId: string): Promise<Account | undefined> {
        return this.data.find(item => item.taxId.getValue() === taxId)
    }

    async save(account: Account): Promise<void> {
        this.data.push(account)
    }

    async update(account: Account): Promise<void> {
        const raw = await this.getById(account.id.getValue())
        if(!raw) throw new Error('account not exists')

        raw.updateTransactions(account.transactions)
    }
}
