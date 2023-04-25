"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc.raceInstances();
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static raceInstances() {
        Orc.instances += 1;
    }
    static createdRacesInstances() {
        return this.instances;
    }
}
exports.default = Orc;
Orc.instances = 0;
