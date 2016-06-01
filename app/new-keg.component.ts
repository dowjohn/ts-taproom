import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Tap Keg:</h3>
    <input placeholder="Bier Name" class="col-sm-7 input-lg lol" #newName>

    <input placeholder="Type" class="col-sm-6 input-lg lol" #newType>
    <button (click)="addKeg(newName, newType)" class="btn-warning btn-lg add-button">TAP</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userBierName: HTMLInputElement, userBierType: HTMLInputElement){
    var newKeg = new Keg(userBierName.value, userBierType.value, 0);
    this.onSubmitNewKeg.emit(newKeg);
  }
}
