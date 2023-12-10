import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  modelValue = false;
  @Input() disabled: boolean = false;
  @Input() label = '';

  @Output() modelChange = new EventEmitter();

  @Input()
  get model() {
    return this.modelValue;
  }
  set model(value) {
    this.modelValue = value;
    this.modelChange.emit(this.modelValue);
  }
}

