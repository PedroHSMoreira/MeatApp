import { Request, Response } from 'express'
import { User, users } from './user'

import * as jwt from 'jsonwebtoken'

const isValid = (user: User): boolean => {
    if (!user) {
        return false
    }
    const dbUser = users[user.email]
    return dbUser != undefined && dbUser.matches(user)
}

class AuthMiddleware {
    public handleAuthentication(req: Request, res: Response) {
        const user: User = req.body
        if (isValid(user)) {
            const dbUser = users[user.email]
            const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-api-password')
            res.send({ name: dbUser.name, email: dbUser.email, accessToken: token })
        } else {
            res.status(403).send({ message: 'Dados inválidos.' })
        }
    }
}

export default new AuthMiddleware()