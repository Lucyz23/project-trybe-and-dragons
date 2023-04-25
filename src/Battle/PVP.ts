import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _fighterOne: Fighter | Character,
    private _fighterTwo: Fighter | Character,
  ) {
    super(_fighterOne);
  }

  public fight(): number {
    while (this._fighterOne.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
      this._fighterOne.attack(this._fighterTwo);
      if (this._fighterTwo.lifePoints === 0) break;
      this._fighterTwo.attack(this._fighterOne);
    }
    return super.fight();
  }
}