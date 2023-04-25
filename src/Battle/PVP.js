"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(_fighterOne, _fighterTwo) {
        super(_fighterOne);
        this._fighterOne = _fighterOne;
        this._fighterTwo = _fighterTwo;
    }
    fight() {
        while (this._fighterOne.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
            this._fighterOne.attack(this._fighterTwo);
            if (this._fighterTwo.lifePoints === 0)
                break;
            this._fighterTwo.attack(this._fighterOne);
        }
        return super.fight();
    }
}
exports.default = PVP;
