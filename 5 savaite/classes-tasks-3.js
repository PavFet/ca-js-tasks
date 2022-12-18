console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  // class Challenge {
  //   constructor(id, level) {
  //     this.id = id;
  //     this.level = level;
  //   }
  //   get points() {
  //     let levels = {VE: 5, EA: 10, ME: 20, HA: 40, VH: 80, EX: 120};
  //     return levels[this.level];
  //   }
  // }
  
  
  // class User {
  //   constructor(name, xp, log) {
  //     this.name = name;
  //     this.xp = xp;
  //     this.log = log;
  //   }
  //   set newSolvedChallenge(challenge) {
  //     this.log.push(challenge.id);
  //     this.xp += challenge.points;
  //   }
  // }
    // Build class User: constructor + setter
  
//   const user1 = new User("Madam", 0, []);
//   const user2 = new User("Steve", 0, []);
  
//   const challenge1 = new Challenge(1, "VE");
//   const challenge2 = new Challenge(2, "EA");
//   const challenge3 = new Challenge(3, "ME");
//   const challenge4 = new Challenge(4, "HA");
//   const challenge5 = new Challenge(5, "VH");
//   const challenge6 = new Challenge(6, "EX");


// console.log(user1.challenge1.newSolvedChallenge);
// console.log(user1.newSolvedChallenge.challenge4);
// console.log(user1.newSolvedChallenge.challenge6);

// console.log(user2.newSolvedChallenge.challenge5);
// console.log(user2.newSolvedChallenge.challenge3);
// console.log(user2.newSolvedChallenge.challenge2);
  // 1. Declare the class instances (two users and six challenges)
  // 2. Set the challenges solved by the users
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{





//   class Player {
//     #hp;
//     #maxHp;
//     #en;
//     #maxEn;
//     armor;
//     name;
//     hpPerc;
  
//     constructor(name,maxHp,maxEn,armor) {
//       this.name = name;
//       this.armor = armor;
//       this.maxHp = maxHp;
//       this.hp = maxHp;
//       this.maxEn = maxEn;
//       this.en = maxEn;
//       this.armor = armor;
//     }
  
//     getHp() {
//       return this.hp;
//     }
//     setHp(amount) {
//       this.hp = amount < 0 ? 0 : amount;
//       this.hpPerc = Math.round((this.hp/this.maxHp) * 100 * 100)/100;
//     }
//     getEn() {
//       return this.en;
//     }
//     setEn(amount) {
//       this.en = amount < 0 ? 0 : amount;
//     }
    
//     skills = {};
//     learnSkill(skillName, stats) {
//       var fixedSkillName = skillName;
//       this.skills[fixedSkillName] = stats;
//       this[fixedSkillName] = function(target) {
//         var skillStats = this.skills[skillName];
//         // Energy
//         if (skillStats.cost > this.getEn()) 
//           return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
//         this.setEn(this.getEn() - skillStats.cost);
        
//         // Armour
//         var effectiveArmor =  target.armor - skillStats.penetration;
//         if (effectiveArmor < 0) effectiveArmor = 0;
//         else if (effectiveArmor > 100) effectiveArmor = 100;
  
//         // Damage
//         var newHp = target.getHp();
//         var damageAmount = ((100 - effectiveArmor) / 100) * skillStats.damage;
//         newHp -= damageAmount;
//         target.setHp(newHp);
        
//         // Health
//         this.setHp(this.getHp() + skillStats.heal);
        
//         // Description
//         var description = `${this.name} used ${skillName}, ${skillStats.desc}, against ${target.name}, doing ${Math.round(damageAmount*100)/100} damage!`;
//         if (skillStats.heal > 0) {
//           description += ` ${this.name} healed for ${skillStats.heal} health!`;
//         }
//         if (target.getHp() <= 0) {
//           description += ` ${target.name} died. `;
//         } else {
//           description += ` ${target.name} is at ${target.hpPerc}% health.`;
//         }
//         return description;
//       };
//     }
//   }
//   console.log('----FIGHT!----')
// //player class exists
// const alice = new Player('Alice',110,50,10);
// const bob = new Player('Bob',100,60,20);
// console.log('Does our Player class exist?');
// test.assertEquals(bob instanceof Player && alice instanceof Player, true,`Alice and Bob don't seem to be instances of the player class.`)

// //learn skill
// console.log("\n----\nCan our competitors learn new skills?")
// Test.assertEquals(typeof alice.learnSkill,'function','Missing `learnSkill` method!')

// //skill is function
// console.log('\n----\nDoes the learnSkill method allow us to add a skill?')
// alice.learnSkill('fireball',{
//     damage: 23,
//     penetration: 1.2,
//     heal: 0,
//     cost: 15,
//     desc: 'a firey magical attack'
// });
// Test.assertEquals(typeof alice.fireball,'function','Could not learn skill "Fireball"!')

// //cast skill
// console.log('\n----\nCan we cast our new skill?')

// Test.assertEquals(alice.fireball(bob),'Alice used fireball, a firey magical attack, against Bob, doing 18.68 damage! Bob is at 81.32% health.','Using Fireball returned the wrong string!')

// //too high energy cost?
// console.log('\n----\nWhat about skills with too high an energy cost?')
// bob.learnSkill('superbeam',{
// 	damage:200,
//   penetration:50,
//   heal:50,
//   cost:75,
//   desc: "an overpowered attack, pls nerf"
// })

// Test.assertEquals(bob.superbeam(alice),`Bob attempted to use superbeam, but didn't have enough energy!`,'Bob should return that he cannot use this skill!')

// //can get a player's HP percent and energy
// console.log("\n----\nAfter that devastating attack, let's check in on Alice and Bob:")
// Test.assertEquals(bob.hpPerc+'% health','81.32% health',`Bob should be at 81.32% health`)
// Test.assertEquals(alice.en+' energy','35 energy',`Alice's energy should be 35.`)

// //Combo attack
// console.log("\n----\nBut wait! Bob's back in action!")
// bob.learnSkill('Meteor Strike',{
// 	damage:118,
//   penetration:4,
//   heal:5,
//   cost:20,
//   desc: "an attack that basically ends the game (gg)"
// })

// Test.assertEquals(bob['Meteor Strike'](alice),"Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health! Alice died. ")

// console.log('\n----\nAre the four health and energy properties private?');
// ['hp','maxHp','en','maxEn'].forEach(prop=>{
// 	Test.assertEquals(bob['#'+prop],undefined,`Property #${prop} should not be publically accessible!`)
// })
}
console.groupEnd();

