import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3 [class.low]="keg.pints <= 10">
    {{ keg.name }}:
    {{ keg.type }}
    <span *ngIf="keg.pints === 0">Empty!</span>
    <span *ngIf="keg.pints !== 0">{{ keg.pints }} Pints Left.</span>
    <button *ngIf="keg.pints !== 0" (click)="keg.drawKeg()" class="btn-primary btn-sm add-button">Draw a Pint</button>
    <button *ngIf="keg.pints <= 10" (click)="keg.replace()" class="btn-danger btn-sm add-button">Replace this keg</button>
  </h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
