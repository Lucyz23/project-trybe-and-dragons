"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(_player, _monstros) {
        super(_player);
        this._player = _player;
        this._monstros = _monstros;
    }
    fight() {
        this._monstros.forEach((monstro) => {
            while (super.fight() > 0 && monstro.lifePoints > 0) {
                monstro.receiveDamage(this._player.strength);
                monstro.attack(this._player);
            }
        });
        return this._player.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVE;
