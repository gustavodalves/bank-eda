import DomainEvent from "../building/domain-event";
import Id from "../building/object-values/id";
import TaxId from "../building/object-values/tax-id";
import AccountNumber from "../entities/account-number";
import Agency from "../entities/agency";
import Transaction from "../entities/transaction";

export default class AccountCreated implements DomainEvent {
    occuredOn: Date = new Date()
    eventName: string = 'AccountCreated'
    constructor(
        readonly aggregateId: Id,
        readonly taxId: TaxId,
        readonly accountNumber: AccountNumber,
        readonly agency: Agency,
        readonly transactions: Transaction[]
    ) {} 
}