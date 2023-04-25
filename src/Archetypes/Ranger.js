"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._luta = 'stamina';
        Ranger.archetypeinstances();
    }
    static archetypeinstances() {
        Ranger.instances += 1;
    }
    static createdArchetypeInstances() {
        return this.instances;
    }
    get energyType() {
        return this._luta;
    }
}
exports.default = Ranger;
Ranger.instances = 0;
