"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._luta = 'stamina';
        Warrior.archetypeinstances();
    }
    static archetypeinstances() {
        Warrior.instances += 1;
    }
    static createdArchetypeInstances() {
        return this.instances;
    }
    get energyType() {
        return this._luta;
    }
}
exports.default = Warrior;
Warrior.instances = 0;
