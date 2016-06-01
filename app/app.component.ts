import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Jojo's Bizarre Taphouse</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Star Platinum", "IPA", 0),
      new Keg("Gold Experience", "Golden Ale", 1),
      new Keg("Magician's Red", "Red Ale", 2),
      new Keg("You thought this would be a sweet keg, but IT WAS ME, DIO", "Sour", 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
