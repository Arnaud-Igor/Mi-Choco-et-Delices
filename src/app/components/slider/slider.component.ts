import { Component } from '@angular/core';
import { SliderItems } from 'src/app/interfaces/slider/slider-items';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  sliderItems: SliderItems[] = [
    { link: 'assets/images/slider/slider-1.jpg', altText: 'Image 1' },
    { link: 'assets/images/slider/slider-2.jpg', altText: 'Image 2' },
    { link: 'assets/images/slider/slider-3.jpg', altText: 'Image 3' },
    { link: 'assets/images/slider/slider-4.jpg', altText: 'Image 4' },
  ];
}
