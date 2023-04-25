"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf.raceInstances();
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static raceInstances() {
        Dwarf.instances += 1;
    }
    static createdRacesInstances() {
        return this.instances;
    }
}
exports.default = Dwarf;
Dwarf.instances = 0;
