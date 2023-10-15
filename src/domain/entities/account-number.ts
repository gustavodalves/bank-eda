export default class AccountNumber {
    readonly value: string

    constructor(value?: string) {
        this.value = value || this.generate()
    }

    private generate() {
        const randomNumber = Math.floor(Math.random() * 1000000);
        return randomNumber.toString().padStart(6, '0');
    }
}
