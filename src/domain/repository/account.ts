import Account from "../entities/account";

export default interface AccountRepository {
    getById(id: string): Promise<Account | undefined>
    getByTaxId(taxId: string): Promise<Account | undefined>
    save(account: Account): Promise<void>
}
