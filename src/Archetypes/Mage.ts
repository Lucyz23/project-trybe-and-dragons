import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _magia: EnergyType | 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._magia = 'mana';
    Mage.archetypeinstances();
  }

  static archetypeinstances() {
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType | 'mana' {
    return this._magia;
  }
}