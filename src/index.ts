import Monster from './Monster';
import Dragon from './Dragon';
import Character from './Character';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('2B');
const player2 = new Character('9S');
const player3 = new Character('Sephirot');

player1.levelUp();
player2.levelUp();
player3.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((element) => {
    element.fight();
  });
}

export {
  runBattles,
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pve,
  pvp,
};