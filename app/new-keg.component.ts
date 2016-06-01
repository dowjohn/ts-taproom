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
        <input placeholder="Bier Brand" class="col-sm-6 input-lg lol" #newBrand>
      </div>
      <div class="row">
        <input placeholder="Bier Name" class="col-sm-6 input-lg lol" #newName>
      </div>
      <div class="row">
        <input placeholder="Type" class="col-sm-6 input-lg lol" #newType>
      </div>
      <div class="row">
        <input placeholder="Bier Abv" class="col-sm-6 input-lg lol" #newAbv>
      </div>
      <div class="row">
        <input placeholder="Price" class="col-sm-6 input-lg lol" #newPrice>
      </div>
      <div class='row'>
        <button (click)="addKeg(newBrand, newName, newType, newAbv, newPrice)" class="btn-warning btn-lg col-sm-2 lol">TAP</button>
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
  addKeg(userBierBrand: HTMLInputElement, userBierName: HTMLInputElement, userBierType: HTMLInputElement, userBierAbv: HTMLInputElement, userBierPrice: HTMLInputElement){
    var newKeg = new Keg(userBierBrand.value, userBierName.value, userBierType.value, userBierAbv.value, userBierPrice.value, 0);
    this.onSubmitNewKeg.emit(newKeg);
    userBierBrand.value= "";
    userBierName.value= "";
    userBierType.value= "";
    userBierAbv.value= "";
    userBierPrice.value= "";
  }
}
