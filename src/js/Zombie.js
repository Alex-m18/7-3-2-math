import Character from './Character';

class Zombie extends Character {
  constructor(name, level = 1) {
    super(name, 'Zombie', level);
    this.private.attack = 40;
    this.private.defence = 10;
  }
}

export default Zombie;
