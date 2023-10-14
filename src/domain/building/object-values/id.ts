export default class Id {
    private readonly value: string

    constructor(
        id?: string
    ) {
        this.value = id || this.generateUuid()
    }

    getValue() {
        return this.value
    }

    generateUuid() {
        return crypto.randomUUID()
    }
}