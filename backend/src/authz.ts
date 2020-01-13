import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

const extractToken = (req: Request): string => {
    let token = undefined
    if (req.headers && req.headers.authorization) {
        const parts: string[] = String(req.headers.authorization).split(' ')
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1]
        }
    }
    return token
}

class HandleAuthorization {
    public handleAuthorization = (req: Request, res: Response, next: NextFunction) => {
        const token = extractToken(req)
        if (!token) {
            res.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
            res.status(401).send({ message: 'Você precisa se autenticar.' })
        } else {
            jwt.verify(token, 'meat-api-password', (error, decoded) => {
                if (decoded) {
                    next()
                } else {
                    res.status(403).send({ message: 'Não autorizado' })
                }
            })
        }
    }
}

export default new HandleAuthorization()