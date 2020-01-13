import { Request, Response } from 'express'
import { User, users } from './user'

const isValid = (user: User): boolean => {
    if (!user) {
        return false
    }
    const dbUser: User = users[user.email]
    return dbUser != undefined && dbUser.matches(user)
}

class AuthMiddleware {
    public handleAuthentication(req: Request, res: Response) {
        const user: User = req.body
        if (isValid(user)) {
            const dbUser: User = users[user.email]
            res.send({ name: dbUser.name, email: dbUser.email })
        } else {
            res.status(403).send({ message: 'Dados inválidos.' })
        }
    }
}

export default new AuthMiddleware()