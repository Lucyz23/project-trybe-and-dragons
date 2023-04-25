import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.raceInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static raceInstances() {
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}