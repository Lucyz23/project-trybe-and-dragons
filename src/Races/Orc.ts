import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.raceInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static raceInstances() {
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}