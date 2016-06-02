import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
// import {DonePipe} from './done.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  // pipes: [DonePipe],
  directives: [NewKegComponent, EditKegDetailsComponent, KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
  (click)="kegClicked(currentKeg)"
  [keg]="currentKeg"
  [class.selected]="currentKeg === selectedKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <br>
  <button *ngIf="!isAddFormShown" (click)="addFormToggle()" class="btn-lg btn-success col-sm-2 lol">Add a new keggggggggg</button>
  <new-keg *ngIf="isAddFormShown" (onSubmitNewKeg)="[createKeg($event), addFormToggle()]"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public isAddFormShown: boolean = false;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    newKeg.id = this.kegList.length;
    this.kegList.push(newKeg);
  }
  addFormToggle(): void {
    if (!this.isAddFormShown) {
      this.isAddFormShown = true;
    } else {
      this.isAddFormShown = false;
    }
  }

  // drawKeg(selectedKeg) {
  //     selectedKeg.pints -= 1;
  // }
}
