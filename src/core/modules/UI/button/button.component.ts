import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() hasArrow = false;
  @Input() mode: 'main' | 'gradient' | 'transparent' = 'main';
  @Input() customStyle = {};
}

