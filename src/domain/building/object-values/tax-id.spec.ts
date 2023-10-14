import TaxId, { CnpjSpecification } from "./tax-id"

describe(
    'Tax Id', 
() => {
    it('shoud be able create cnpj tax id', () => {
        const cnpj = '06453520000136'

        const taxId = new TaxId(cnpj)

        expect(taxId.getValue()).toBe(cnpj)
    })
})
