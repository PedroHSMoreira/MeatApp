import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from 'src/app/core/notification.service';
import { take } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  @Input() message: string = 'Hello there!'
  snackVisibility: string = 'hidden'

  constructor(private notification: NotificationService) { }

  ngOnInit() {
    this.notification.notifier
      .subscribe(message => {
        this.message = message
        this.snackVisibility = 'visible'
        timer(3000)
          .subscribe(timer => this.snackVisibility = 'hidden')
      })
  }
}
