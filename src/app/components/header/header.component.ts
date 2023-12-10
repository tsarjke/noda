import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  isMenuOpen = false;
  isExpanded = false;

  toggleHtmlClass() {
    const htmlElement = this.document.documentElement;
    if (this.isMenuOpen) {
      this.renderer.addClass(htmlElement, 'no-scroll');
    } else {
      this.renderer.removeClass(htmlElement, 'no-scroll');
    }
  }

  setMenuStatus(value: boolean) {
    this.isMenuOpen = value;
  }

  blocks = [
    {
      header: 'Pay-ins',
      isVertical: false,
      content: [
        {
          imgName: 'banking-payments.svg',
          header: 'Open Banking Payments',
          description: 'Fast, secure, and regulated bank transfers',
          isSmall: false,
        },
        {
          imgName: 'card-payments.svg',
          header: 'Card Payments',
          description: 'Easy card payments processing for merchants',
          isSmall: false,
        },
        {
          imgName: 'checkout.svg',
          header: 'Checkout Form',
          description: 'Streamlined checkout experience for customers',
          isSmall: false,
        },
      ],
    },
    {
      header: 'Pay-outs',
      isVertical: true,
      content: [
        {
          imgName: 'bank-payouts.svg',
          header: 'Bank Payouts',
          description: 'Convenient and fast bank-based payouts for merchants',
          isSmall: true,
        },
        {
          imgName: 'card-payouts.svg',
          header: 'Card Payouts',
          description: 'Effortless card-based payouts for merchants',
          isSmall: true,
        },
      ],
    },
  ];
}
