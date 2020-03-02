import Character from './Character';

class Bowman extends Character {
  constructor(name, level = 1) {
    super(name, 'Bowman', level);
    this.private.attack = 25;
    this.private.defence = 25;
  }
}

export default Bowman;
