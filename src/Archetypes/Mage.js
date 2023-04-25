"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._magia = 'mana';
        Mage.archetypeinstances();
    }
    static archetypeinstances() {
        Mage.instances += 1;
    }
    static createdArchetypeInstances() {
        return this.instances;
    }
    get energyType() {
        return this._magia;
    }
}
exports.default = Mage;
Mage.instances = 0;
