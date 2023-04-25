import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _luta: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._luta = 'stamina';
    Warrior.archetypeinstances();
  }

  static archetypeinstances() {
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType | 'stamina' {
    return this._luta;
  }
}