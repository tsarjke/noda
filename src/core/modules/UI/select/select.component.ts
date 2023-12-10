import { Component, EventEmitter, Input, Output } from '@angular/core';
import { selectOption } from '../../../../app/models/selectOption';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  isSelectOpen = false;
  modelValue: selectOption;
  @Input() disabled: boolean = false;
  @Input() placeholder = '';
  @Input() options: selectOption[];

  @Output() modelChange = new EventEmitter();

  @Input()
  get model() {
    return this.modelValue;
  }

  set model(value) {
    this.modelValue = value;
    this.modelChange.emit(this.modelValue);
  }

  setValue(value: selectOption) {
    this.model = value;
  }
}

