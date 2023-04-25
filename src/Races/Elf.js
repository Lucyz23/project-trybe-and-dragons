"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf.raceInstances();
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static raceInstances() {
        Elf.instances += 1;
    }
    static createdRacesInstances() {
        return this.instances;
    }
}
exports.default = Elf;
Elf.instances = 0;
