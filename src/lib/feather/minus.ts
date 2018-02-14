import { Component } from '@angular/core';

@Component({
  selector: 'i-minus',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>`
})
export class IconMinus {}
