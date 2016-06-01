import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3 (click)="kegClicked(currentKeg)"
    [class.low]="keg.pints <= 10">
    {{ keg.name }}:
    {{ keg.type }}
    {{ keg.pints}}
    <button (click)="keg.drawKeg()" class="btn-primary btn-sm add-button">Draw a Pint</button>
  </h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
