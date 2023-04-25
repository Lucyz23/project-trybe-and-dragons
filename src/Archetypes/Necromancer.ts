import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _magia: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._magia = 'mana';
    Necromancer.archetypeinstances();
  }

  static archetypeinstances() {
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._magia;
  }
}