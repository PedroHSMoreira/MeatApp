import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from './core/notification.service';
import { LoginService } from './core/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService, private loginService: LoginService) {
        super()
    }

    handleError(errorReponse: HttpErrorResponse | any) {
        if (errorReponse instanceof HttpErrorResponse) {
            const message = errorReponse.error.message
            switch (errorReponse.status) {
                case 401:
                    this.ns.notify(message || 'Não autorizado')
                    this.loginService.handleLogin()
                    break;
                case 403:
                    this.ns.notify(message || 'Não autorizado.')
                    break;
                case 404:
                    this.ns.notify(message || 'Recurso não encontrado.')
                    break;
                case 500:
                    this.ns.notify(message || 'Erro interno.')
                    break;
            }
        }
        super.handleError(errorReponse)
    }
}