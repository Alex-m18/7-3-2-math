import StonedCharacter from './StonedCharacter';

class Daemon extends StonedCharacter {
  constructor(name, level = 1) {
    super(name, 'Daemon', level);
    this.private.attack = 10;
    this.private.defence = 40;
  }
}

export default Daemon;
