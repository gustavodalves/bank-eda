import Specification from "../../../helpers/specification"

export class CnpjSpecification extends Specification<string> {
    isSatisfiedBy(
        cnpj: string
    ) {
      cnpj = cnpj.replace(/\D/g, '');

      if (cnpj.length !== 14) {
        return false;
      }

      if (/^(\d)\1+$/.test(cnpj)) {
        return false;
      }

      return true
  }
}

class CpfSpecification extends Specification<string> {
    isSatisfiedBy(cpf: string): boolean {
        cpf = cpf.replace(/[^\d]/g, '');

        if (cpf.length !== 11) {
          return false;
        }
      
        let sum = 0;
        for (let i = 0; i < 9; i++) {
          sum += parseInt(cpf[i]) * (10 - i);
        }
      
        const remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === parseInt(cpf[9])) {
          sum = 0;
          for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf[i]) * (11 - i);
          }
          const secondRemainder = (sum * 10) % 11;
          return secondRemainder === 10 || secondRemainder === parseInt(cpf[10]);
        }
      
        return true;
    }
}

export default class TaxId {
    private readonly value: string

    constructor(
        taxId: string
    ) {
        if(!this.validate(taxId)) throw new Error('tax id is not valid')
        this.value = taxId
    }

    getValue() {
        return this.value
    }

    private validate(
        taxId: string
    ): boolean {
        const cnpjSpecification = new CnpjSpecification()
        const cpfSpecification = new CpfSpecification()
  
        return cnpjSpecification.or(cpfSpecification).isSatisfiedBy(taxId)
    }
}
