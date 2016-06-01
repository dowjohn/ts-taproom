import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <div class="form-group">
      <h3>Tap Keg:</h3>
      <div class="row">
        <input placeholder="Bier Name" class="col-sm-6 input-lg lol" #newName>
      </div>
      <div class="row">
        <input placeholder="Type" class="col-sm-6 input-lg lol" #newType>
      </div>
      <div class='row'>
        <button (click)="addKeg(newName, newType)" class="btn-warning btn-lg col-sm-2 lol">TAP</button>
      </div>
    </div>
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
