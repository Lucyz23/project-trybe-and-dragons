import Energy from '../Energy';

export default interface Fighter { 
  lifePoints: number;
  energy?: Energy;
  strength: number;
  defense: number;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}