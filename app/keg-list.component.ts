import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
// import {DonePipe} from './done.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  // pipes: [DonePipe],
  directives: [NewKegComponent],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    {{ currentKeg.name }}:
    {{ currentKeg.type }}
    {{ currentKeg.pints}}
    <button (click)="drawKeg(currentKeg)" class="btn-primary btn-sm add-button">Draw a Pint</button>
  </h3>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    newKeg.id = this.kegList.length;
    this.kegList.push(newKeg);
  }
  drawKeg(selectedKeg) {
      selectedKeg.pints -= 1;
  }
}
