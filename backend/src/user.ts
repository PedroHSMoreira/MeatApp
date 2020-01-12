export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users = {
    "pedro@teste.com": new User('pedro@teste.com', 'Pedro', 'pedro123'),
    "elisa@teste.com": new User('elisa@teste.com', 'Elisa', 'elisa123')
}