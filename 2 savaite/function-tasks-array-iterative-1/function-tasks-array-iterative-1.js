


const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];



console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printPeopleInRow (person) {
    console.log(`${person.name} ${person.surname} : ${person.sex} ${person.age} ${person.income} ${person.married} ${person.hasCar}`);
  }

  people.forEach(printPeopleInRow);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printNameAndSurname (person) {
    console.log(`${person.name} - ${person.surname}`);
  }

  people.forEach(printNameAndSurname);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printNameSurnameAndMarriedStatus (person) {
    console.log(`${person.name} ${person.surname} : married - ${person.married}`);
  }

  people.forEach(printNameSurnameAndMarriedStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
function getSexAndIncome (person) {
  return `${person.sex} ${person.income}`;
}
const sexAndIncome = people.map(getSexAndIncome);
console.log(sexAndIncome);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function getNameSurnameSex (person) {
    return `${person.name} ${person.surname} ${person.sex}`;
  }
  const nameSurnameSex = people.map(getNameSurnameSex);
  console.log(nameSurnameSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printMale (person) {
    person.sex === 'male' ? console.log(person) : 0;
  }

  people.forEach(printMale);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printFemale (person) {
    person.sex === 'female' ? console.log(person) : 0;
  }

  people.forEach(printFemale);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function printWhoHasCar (person) {
    person.hasCar === true ? console.log(person) : 0;
  }
  people.forEach(printWhoHasCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function printWhoAreMarried (person) {
    person.married === true ? console.log(person) : 0;
  }
  people.forEach(printWhoAreMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // function arrWithoutSexNameSurname (prevPeopleArr, person) {
  //    const driversBySex = {
  //         male: 0,
  //         female: 0,
  //       };
  //       if (person.sex === 'male') driversBySex.male +=1;
  //       else if (person.sex === 'female') driversBySex.female +=1;
  //       prevPeopleArr.push(driversBySex);
  //   return prevPeopleArr;
  // }
  // const newArrWithoutSexNameSurname = people.reduce (arrWithoutSexNameSurname, []);
  // console.log(newArrWithoutSexNameSurname);

function arrDriversBySex (prevDriversBySex, person) {
if (person.hasCar) {
  if(person.sex === 'male') prevDriversBySex.male +=1;
  else prevDriversBySex.female += 1;
}
  return prevDriversBySex;
}
const dvirversBySex = people.reduce(arrDriversBySex, {male: 0, female: 0});
console.log(dvirversBySex);



  // const driversBySex = {
  //   male: 0,
  //   female: 0,
  // }
  // people.forEach((person) => {
  //   if (person.hasCar) {
  //     if (person.sex === 'male') driversBySex.male +=1;
  //     else if (person.sex === 'female') driversBySex.female +=1;
  //   }
  // });
  // console.log(driversBySex);

}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{

  function changeIncomeToSalary (person){
    return {
    name: person.name,
    surname: person.surname,
    sex: person.sex,
    age: person.age,
    salary: person.income,
    married: person.married,
    hasCar: person.hasCar,
    }
  }
  const incomeToSalary = people.map(changeIncomeToSalary);
  console.log(incomeToSalary);

}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function arrWithoutSexNameSurname (prevPeopleArr, person) {
    prevPeopleArr.push({
    age: person.age,
    income: person.income,
    married: person.married,
    hasCar: person.hasCar,
    });
    return prevPeopleArr;
  }
  const newArrWithoutSexNameSurname = people.reduce (arrWithoutSexNameSurname, []);
  console.log(newArrWithoutSexNameSurname);



}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function replaceNameSurnameToFullname (prevPeopleArr, person) {
    prevPeopleArr.push({
      fullname: `${person.name} ${person.surname}`,
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar,
    });
    return prevPeopleArr;
  }
  const newArrFullname = people.reduce (replaceNameSurnameToFullname, []);
  console.log(newArrFullname);
}
console.groupEnd();

