import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { KegComponent } from './keg.component';
// import {DonePipe} from './done.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  // pipes: [DonePipe],
  directives: [NewKegComponent, KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList" [keg]="currentKeg"></keg-display>
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
  // drawKeg(selectedKeg) {
  //     selectedKeg.pints -= 1;
  // }
}
