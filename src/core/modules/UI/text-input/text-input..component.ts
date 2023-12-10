import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  modelValue = '';

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

