import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.raceInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static raceInstances() {
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}