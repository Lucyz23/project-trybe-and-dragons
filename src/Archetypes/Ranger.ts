import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _luta: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._luta = 'stamina';
    Ranger.archetypeinstances();
  }

  static archetypeinstances() {
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType | 'stamina' {
    return this._luta;
  }
}