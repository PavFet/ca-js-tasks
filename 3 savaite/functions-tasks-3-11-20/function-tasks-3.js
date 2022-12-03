

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
          if(str.length % 2 == 0) {
              return true;
          }
          else {
            return false;
          }
  }
  }
  
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');

console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {
    const vowels = 'AaĄaEeĘęĖėIiĮįYyOoUuŲųŪū';
    let vowelsCount = 0;
    
    for(let x = 0; x < str.length ; x++) {
      if (vowels.indexOf(str[x]) !== -1) {
        vowelsCount += 1;
      }
    
    }
    return vowelsCount;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');


}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    const consonants = 'BbCcČčDdFfGgHhJjKkLlMmNnPpRrSsŠšTtVvZzŽž';
    let consonantsCount = 0;
    for(let x = 0; x < str.length; x +=1){
      if (consonants.indexOf(str[x]) !== -1) {
        consonantsCount += 1;
      }
    }
    return consonantsCount;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');


}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
  function isOnlyLetters(str) {
    const numbers = '0123456789';
  for(let x = 0; x < str.length; x +=1){
    if (numbers.indexOf(str[x]) == 1) {
      return false;
    }
    else {
      return true;
    }
  }
  }

 
  // const numbers = '0123456789';
  // for(let x = 0; x < str.length; x +=1){
  //   if(numbers[x] == str[x]) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }


  // const numbers = '0123456789';
  // for(let x = 0; x < str.length; x +=1){
  //   if (numbers.indexOf(str[x]) == 1) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }

  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    const letterA = 'a';
    let aLetterCount = 0;
    
    for(let x = 0; x < str.length ; x++) {
      if (letterA.indexOf(str[x]) !== -1) {
        aLetterCount += 1;
      }
    
    }
    return aLetterCount;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{

  function letterCount(str, searchLetter) {
    let consonantsCount = 0;
    for(let i = 0; i < str.length; i +=1){
      if (searchLetter[i] == str[i]) {
        consonantsCount += 1;
      }
      else {
        consonantsCount += 0;
      }
    }
    return consonantsCount;
    
  }

  // const consonants = 'BbCcČčDdFfGgHhJjKkLlMmNnPpRrSsŠšTtVvZzŽž';
  // let consonantsCount = 0;
  // for(let x = 0; x < str.length; x +=1){
  //   if (searchLetter.indexOf(str[x]) == consonants.indexOf(str[x])) {
  //     consonantsCount += 1;
  //   }
  // }
  // return consonantsCount;
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function indexOfLetterA(str) {


    return str.indexOf('a') > -1 ? `Indexas nr: ${str.indexOf('a')}` : `'a' raides nera zodyje'`;

    
  }
  console.log('---');
  console.log({
    'labas': indexOfLetterA('labas'),
    'kempės': indexOfLetterA('kempės'),
    '123123': indexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function indexOfLetter(str, searchLetter) {
    return str.indexOf(searchLetter) > -1 ? `Indexas nr: ${str.indexOf(searchLetter)}` : `${searchLetter} raides nera zodyje'`;
  }
  console.log('---');
  console.log({
    'labas, a': indexOfLetter('labas', 'a'),
    'kempės, k': indexOfLetter('kempės', 'k'),
    '123123, z': indexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {
    const foundResults = [...str.matchAll('a')];
    const result = foundResults.map(({ index }) => index);
    return result;
  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  const letterEVariations = 'eęė';

  const additionalLTChecks = {
    a: 'aą',
    i: 'iį',
    e: letterEVariations,
    ę: letterEVariations,
    ė: letterEVariations,
    u: 'uūų'
  }
  
  function indexesOfLetter(str, searchLetter) {
    const search = additionalLTChecks[searchLetter] ?? searchLetter;
    // Sukuriamas regex, pvz:
    //   * 'k'  ->  /[k]/ig  ieškoma vienas iš tarp laužtinių skliaustų esantis simbolis 
    //   * 'aą' ->  /[aą]/ig
    const letterRegex = new RegExp(`[${search}]`, 'ig');
    // Surandami visi rezultatai ir grąžinami @iterator forOf pavidalu,
    // Naudojant destruktūrizavimo sintaksę fali patalpinti iteratoriaus duomenis masyve
    const foundResults = [...str.matchAll(letterRegex)];

  
    /*
      Kiekvieno elemento duomenys yra tokios struktūros: { 
        0: rastasElementas,
        <index>: number, 
        input: simbolių darinys kuriame buvo rastas elementas
        groups: grupės numeris, jeigu regex'e buvo naudojamas grupavimas -> ()
      }
  
      performuojame rezultatus į indeksų masyvą destruktūrizuodami rastos raidės <index>
    */
    const result = foundResults.map(({ index }) => index);
    return result;
  }
  // indexesOfLetter('labas eglė ežerėlis pusę', 'e');
  
  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();
