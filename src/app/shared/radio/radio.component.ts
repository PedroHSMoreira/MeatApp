import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from '../../models/radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true

    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }
  // Escreve o novo valor 
  writeValue(obj: any): void {
    this.value = obj
  }
  // Registra o novo valor
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
