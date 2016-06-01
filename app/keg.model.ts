export class Keg {
  public low: boolean = false;
  public pints: number = 24;
  constructor(public name: string, public type: string, public id: number) {
  }
  public drawKeg = function() {
    if(this.pints !== 0) {
      this.pints -= 1;
    }
  }
  public replace = function() {
    this.pints = 24;
  }
}
