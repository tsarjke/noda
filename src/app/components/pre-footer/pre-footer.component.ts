import { Component, ElementRef, ViewChild } from '@angular/core';
import { Card } from '../../models/card';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrl: './pre-footer.component.scss',
})
export class PreFooterComponent {
  index = 0;

  contents: Card[] = [
    {
      title: 'Carousel 1',
      name: 'carousel-1.jpg',
    },
    {
      title: 'Carousel 2',
      name: 'carousel-2.jpg',
    },
    {
      title: 'Carousel 3',
      name: 'carousel-3.jpg',
    },
  ];

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  swiperConfig: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: 1.5,
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
  }
}
