class Pokemon {                                                              //class template
  constructor(name, health, magic, skills, counter) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];                                                       //skill array will be pushed in as they learn
    this.counter = 0;                                                       
  }
  learnAttackSkill(newskill) {
    this.skills.push(newskill);
  }

  showStatus() {
    if (this.counter > 3) {
      return `${this.name} has won the battle and `;
    } else {
      return `${this.name} has ${this.health} health, and ${this.magic} magic`;
    }
  }

  getMagics() {
    let randonNum = Math.floor(Math.random() * 20);
    this.magic = this.magic + randonNum;
  }

  hasEnoughMagic(skillName) {
    return this.magic > skillName.magicCost;
  }

  isAlive() {
    if (this.health > 0) {
      return true;
    } else {
      return false;
    }
  }

  attack(skillName, opponent) {
    
    if(  opponent.isAlive() &&  this.isAlive()) {
    for (let ele of this.skills) {
      // for(let i=0; i<this.skills.length; i++) {
      if (ele.attack === skillName) {
        //if statement from line 45-60, name matches

        if (
          //if statement from line 47-51, if everybody is alive & not has won yet
          this.isAlive() &&
        
          this.counter < 3
        ) {
          if (this.hasEnoughMagic(ele)) {
            //if statement from 53-56, if there is enough magic
            this.magic = this.magic - ele.magicCost;
            this.counter = this.counter + 1;            // add a point to attacker
            opponent.health = opponent.health - ele.damage;             //decrease opponents health
            opponent.isAlive() &&  this.isAlive()                       // checking if both alive
            console.log(`${this.name} attacked ${opponent.name} left opponent with ${opponent.health} health`);
          } else {
            this.getMagics();       //if no magic left, obtain more magic.
          }
        } if(  !opponent.isAlive() || this.counter === 3) {             // if opponent is dead or attacker has 3 points
          console.log(`${opponent.name} is dead`);                      
          console.log(this.showStatus());
          console.log(`${this.name} won the battle`);
        }
      }
    }
  
  }
}
}

class AttackSkill {
  constructor(attack, damage, magicCost) {
    this.attack = attack;
    this.damage = damage;
    this.magicCost = magicCost;
  }
}

const pikachuPoke = new Pokemon("Pikachu", 75, 100); //Instruction 1
const bulbasaur = new Pokemon("Bulbasaur", 75, 100); //Instruction 1

const lightning = new AttackSkill("lighting", 25, 5); //Instruction 2
const bombing = new AttackSkill("bombing", 25, 10); //Instruction 2
const poisonSeed = new AttackSkill("poisonSeed", 25, 15); //Instruction 2

console.log("*****Instruction 1*********");
console.log(pikachuPoke); //Instruction 1

console.log(bulbasaur); //Instruction 1

console.log("*******Instructions 2*********");
console.log(lightning);
console.log(bombing);

pikachuPoke.learnAttackSkill(lightning); // Instructions 3
pikachuPoke.learnAttackSkill(poisonSeed);
pikachuPoke.learnAttackSkill(bombing);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(bombing);
bulbasaur.learnAttackSkill(lightning);


console.log("*******Instructions 3*********");

console.log(bulbasaur);

console.log(pikachuPoke);

console.log("*******class pokemom, method has enough magic*********");
console.log(pikachuPoke.hasEnoughMagic(bombing)); //class pokemom, method has enough magic

console.log("*******class pokemom, method is alive*********");
console.log(pikachuPoke.isAlive());

pikachuPoke.attack("bombing", bulbasaur);
pikachuPoke.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachuPoke);
pikachuPoke.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachuPoke);
pikachuPoke.attack("lightning", bulbasaur);
pikachuPoke.attack("poisonSeed", bulbasaur);
bulbasaur.attack("poisonSeed", pikachuPoke);
pikachuPoke.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachuPoke);
pikachuPoke.attack("lightning", bulbasaur);
pikachuPoke.attack("poisonSeed", bulbasaur);
