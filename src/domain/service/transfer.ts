import Account from "../entities/account";

export default class TransferService {
    transfe(
        from: Account,
        to: Account,
        value: number
    ) {
        from.debit(value)
        to.credit(value)
    }
}
