import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter, 
    private _monstros: SimpleFighter[] | Fighter[],
  ) {
    super(_player);
  }

  fight(): number {
    this._monstros.forEach((monstro) => {
      while (super.fight() > 0 && monstro.lifePoints > 0) {
        monstro.receiveDamage(this._player.strength);
        monstro.attack(this._player);
      }
    });

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}