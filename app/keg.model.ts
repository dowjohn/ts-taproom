export class Keg {
  public low: boolean = false;
  public pints: number = 24;
  constructor(public name: string, public type: string, public id: number) {
  }
  public drawKeg = function() {
      this.pints -= 1;
  }
}
