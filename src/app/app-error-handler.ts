import { throwError } from 'rxjs'
import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandler {

    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string

        if (error instanceof HttpErrorResponse) {
            console.log('teste')
            const body = JSON.stringify(error.error)
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText || ''} ${body}`
        } else {
            errorMessage = error.toString()

        }
        console.log(errorMessage)
        return throwError(errorMessage)
    }
}