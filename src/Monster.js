"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    receiveDamage(attackPoints) {
        const dano = attackPoints - this._lifePoints;
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
        }
        return dano;
    }
    attack(enemy) {
        const ataque = this._strength;
        enemy.receiveDamage(ataque);
    }
}
exports.default = Monster;
