"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._magia = 'mana';
        Necromancer.archetypeinstances();
    }
    static archetypeinstances() {
        Necromancer.instances += 1;
    }
    static createdArchetypeInstances() {
        return this.instances;
    }
    get energyType() {
        return this._magia;
    }
}
exports.default = Necromancer;
Necromancer.instances = 0;
