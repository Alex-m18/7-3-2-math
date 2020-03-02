import Character from './Character';

class Swordsman extends Character {
  constructor(name, level = 1) {
    super(name, 'Swordsman', level);
    this.private.attack = 40;
    this.private.defence = 10;
  }
}

export default Swordsman;
