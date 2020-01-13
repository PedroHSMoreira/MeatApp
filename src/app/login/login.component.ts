import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../core/login.service';
import { take } from 'rxjs/operators';
import { NotificationService } from '../core/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private loginService: LoginService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(
      take(1)
    ).subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
      errorRes => this.notificationService.notify(errorRes.error.message))
  }

}
