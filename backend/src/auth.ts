import { Request, Response } from 'express'
import { User, users } from './user'

class AuthMiddleware {
    public handleAuthentication(req: Request, res: Response) {
        const user: User = req.body
        if(this.isValid(user)) {

        } else {
            res.status(403).send({message: 'Dados inválidos.'})
        }
    }
    
    private isValid(user: User): boolean {
        if(!user) {
            return false
        }
        const dbUser = users[user.email]
        return dbUser != undefined && dbUser.matches(user)
    }
}

export default new AuthMiddleware()