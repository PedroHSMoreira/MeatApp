import { throwError } from 'rxjs'
import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandler {
    
    static handleError(error: Response | any) {
        let errorMessage: string

        if (error instanceof HttpErrorResponse) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            console.log(error)
            errorMessage = error.toString()
            
        }
        console.log(errorMessage)
        return  throwError(errorMessage)
    }
}