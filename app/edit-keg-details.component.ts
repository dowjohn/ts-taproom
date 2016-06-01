import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div>
      <h3>Edit Name and/or type: </h3>
      <div class='row'>
      <input [(ngModel)]="keg.name" class="col-sm-6 input-lg keg-form"/>
      </div>
      <div class='row'>
      <input [(ngModel)]="keg.type" class="col-sm-6 input-lg keg-form"/>
      </div>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
