import Character from './Character';

class Undead extends Character {
  constructor(name, level = 1) {
    super(name, 'Undead', level);
    this.private.attack = 25;
    this.private.defence = 25;
  }
}

export default Undead;
