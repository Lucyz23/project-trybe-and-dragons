import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.raceInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static raceInstances() {
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}