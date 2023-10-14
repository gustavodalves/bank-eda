import Transaction from "../entities/transaction";

export default interface TransactionRepository {
    getById(id: string): Promise<Transaction | undefined>
    save(transaction: Transaction): Promise<void>
}
