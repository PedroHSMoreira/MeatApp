import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../models/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Cŕedito', value: 'CRE'},
    {label: 'Cartão Refeição', value: 'REF'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
