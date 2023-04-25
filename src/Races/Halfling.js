"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling.raceInstances();
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static raceInstances() {
        Halfling.instances += 1;
    }
    static createdRacesInstances() {
        return this.instances;
    }
}
exports.default = Halfling;
Halfling.instances = 0;
