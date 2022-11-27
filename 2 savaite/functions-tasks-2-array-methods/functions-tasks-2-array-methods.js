// ----------------------Užduotys--------------------------



const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];


console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
function arrDouble (number){
  return number * 2;
}
  const double = numbers.map(arrDouble);

  console.log({
    numbers,
    double,
  });
}

console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function arrSquare (number){
    return number * number;
  }
    const square = numbers.map(arrSquare);
  
    console.log({
      numbers,
      square,
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function newArrMultiplyByIndex (number, i){
    return number * i;
  }
    const multiplyByIndex = numbers.map(newArrMultiplyByIndex);
  
    console.log({
      numbers,
      multiplyByIndex,
    });

}
 

console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
 function filterPositives (number){
  return number > 0;
 }
  
  const positives = numbers.filter(filterPositives);
  console.log({
    numbers,
    positives,
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives (number){
    return number < 0;
   }
    
    const negatives = numbers.filter(filterNegatives);
    console.log({
      numbers,
      negatives,
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{

  function filterEven (number){
    
    return number % 2 === 0;
   }
    
    const even = numbers.filter(filterEven);
    console.log({
      numbers,
      even,
    });


}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{

  function filterEven (number){
    
    return number % 2 < 0  || number % 2 > 0;

   }
    
    const odd = numbers.filter(filterEven);
    console.log({
      numbers,
      odd,
    });


  
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{

  function newArrAbsoluteValues (number){
    if (number < 0) number *= -1;
    return number;

   }
    
    const absolute = numbers.map(newArrAbsoluteValues);
    console.log({
      numbers,
      absolute,
    });

  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{

  function newArrSquareByIndex (number, i){
    return number **= i;
  }
    const squareByIndex = numbers.map(newArrSquareByIndex);
  
    console.log({
      numbers,
      squareByIndex,
    });

}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals (number){
    return number % 1 === 0 && number > 0;
   }
    
    const natural = numbers.filter(filterNaturals);
    console.log({
      numbers,
      natural,
    });


}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{

  function absArrElements (number){
    return   Math.round(number);
   }
    
    const whole  = numbers.map(absArrElements);
    console.log({
      numbers,
      whole ,
    });



}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEachSecond (number, index){
    return number = index % 2;
   }
    
    const eachSecond = numbers.filter(filterEachSecond);
    console.log({
      numbers,
      eachSecond,
    });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{


  function filterEvery5(number) {
    const resultArr = [];
    for (let i = 0; i < number.length; i += 5) {
      resultArr.push(number[i]);
     }
     return resultArr;
  }
  console.log({
    numbers,
    every5: filterEvery5(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printWithSymbolBetweenIndexAndValue (number, index) { 
     return `${index} => ${number}`;
   }

   const arrWithSymbolBetweenIndexAndValue = numbers.map(printWithSymbolBetweenIndexAndValue);
   console.log({
     numbers,
     arrWithSymbolBetweenIndexAndValue,
   });

}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{  


  function sumValues (prevValue, number){
   return prevValue + number;
  
 }
  
  const sum = numbers.reduce(sumValues, 0);
  console.log({
    numbers,
    sum,
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function arrAvg (prevValue, number){
    // const sum = prevValue + number;
    return prevValue + number;
   }
    
    const avg = numbers.reduce(arrAvg, 0) / numbers.length ;
    console.log({
      numbers,
      avg,
    });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function getMax (prev, number){
    return prev > number ? prev : number;
   }
    
    const max = numbers.reduce(getMax);
    console.log({
      numbers,
      max,
    });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function getMin (prev, number){
    return prev < number ? prev : number;
   }
    
    const min = numbers.reduce(getMin);
    console.log({
      numbers,
      min,
    });

}
console.log('---');
console.groupEnd();
