import { Component } from '@angular/core';
import { selectOption } from '../../../models/selectOption';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrl: './welcome-form.component.scss',
})
export class WelcomeFormComponent {
  options: selectOption[] = [
    {
      text: 'Public Limited Company',
      value: 'public',
    },
    {
      text: 'Private Limited Company',
      value: 'private',
    },
    {
      text: 'Franchise',
      value: 'franchise',
    },
    {
      text: 'Partnership',
      value: 'partnership',
    },
  ];
}
