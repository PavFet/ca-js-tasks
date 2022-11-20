console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7 You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order. ');
{
  let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "beer", price: 0}
  ];
  function sortDrinkByPrice(name, price) {
    let result = drinks.sort(function(a,b){
      if (a.price < b.price) return -1;
    });
    return result;
  }
  

  const result = sortDrinkByPrice(drinks);
 
  console.log(result);

}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).');
{
  const assertSimilar = addNameaddName({piano: 500, stereo: 300}, "Caligula", 440);
  function addNameaddName(obj, name, value) {
    obj[name] = value;
    return obj;
  }

  console.log(addNameaddName(assertSimilar));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3 Try finding your ancestors and offspring with code. Create a function that takes a number x and a character y "m" for male, "f" for female, and returns the name of an ancestor m/f or descendant m/f');
{
  function generation(x, y) {
    let result = [x , y];
    if (x === -3 && y === 'm') console.log('great grandfather');
    if (x === 1 && y === 'f') console.log('daughter');
    if (x === -3 && y === 'f') console.log('great grandmother');
    if (x === -2 && y === 'm') console.log('grandfather');
    if (x === -2 && y === 'f') console.log('grandmother');
    if (x === -1 && y === 'm') console.log('father');
    if (x === -1 && y === 'f') console.log('mother');
    if (x === 0 || y === 'f') console.log('me!');
    if (x === 1 && y === 'm') console.log('son');
    if (x === 1 && y === 'f') console.log('daughter');
    if (x === 2 && y === 'm') console.log('grandson');
    if (x === 2 && y === 'f') console.log('granddaughter');
    if (x === 3 && y === 'm') console.log('great grandson');
    if (x === 3 && y === 'f') console.log('great granddaughter');
    

    return result;
  }
  const x = -2;
  const y = 'm';
  const result = generation(x, y);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.');
{
  function maximumScore(tileHand) {
    let sum = 0;
    for(let i = 0; i < tileHand.length; i += 1) {
      sum = sum + tileHand[i].score;
    }
    return sum;
  }

  const cards = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]
  const result = maximumScore(cards);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost. Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.');
{
  console.log('Neišsprendžiau ');
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.' );
{
  function toArray(obj) {
	const result = [];
  let i = 0;
  for (const key in obj) {
    result[i] = [key, obj[key]];
    i +=1;
  }
  return result;
  }
  const arr = toArray({ a:1, b:2});
  console.log(arr);
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.');
{

  console.log('Neišsprendžiau ');
// const inks = ({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// });

// function inkLevels(inks) {
//  arrInks = Object.values(inks);
//  arrInks.sort((a, b) => a - b);
//  return arrInks[0];
// }
// console.log(inkLevels(inks));


}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".');
{
 


  function summValues(){
    let sum = 0;
    for (let salary of Object.values(stolenItems)){
      sum += salary;
    }
    if( sum <= 0) {
      console.log('Lucky you');
    }
    return sum;
  }
  
  const stolenItems = {
    tv: 0,
    skate: 0,
    stereo: 0,
  };

  const result = summValues(stolenItems);
  console.log(result);
}
console.groupEnd();
