// Bendrieji kintamieji
let people, arrPeopleWithClass;


console.group(' PIRMA DALIS 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:   name   surname  age  height  weight   sex')
 {

  people = [{
      name: 'Serbentas',
      surname: 'Serbentauskas',
      age: 15,
      height: 180,
      weight: 100,
      sex: 'male'
    },
    {
      name: 'Vysnia',
      surname: 'Vysniauskas',
      age: 72,
      height: 180,
      weight: 130,
      sex: 'male'
    },
    {
      name: 'Joska',
      surname: 'Joskauskaite',
      age: 26,
      height: 160,
      weight: 60,
      sex: 'female'
    },
    {
      name: 'Moliune',
      surname: 'Moliunauskiene',
      age: 12,
      height: 150,
      weight: 92,
      sex: 'female'
    },
    {
      name: 'Zapaskas',
      surname: 'Bagaznikas',
      age: 33,
      height: 186,
      weight: 82,
      sex: 'male'
    },
    {
      name: 'Balkonas',
      surname: 'Belangauskas',
      age: 27,
      height: 175,
      weight: 52,
      sex: 'male'
    },
    {
      name: 'Kyske',
      surname: 'Mysnieke',
      age: 15,
      height: 162,
      weight: 62,
      sex: 'female'
    },
    {
      name: 'Lapke',
      surname: 'Lapskiene',
      age: 32,
      height: 175,
      weight: 57,
      sex: 'female'
    }
  ]

  console.log(people)
}


console.group(' 2. Panaudojant array.forEach:') 
{
  console.group('Atspausdinti kiekvieną elementą');
  people.forEach((person) => console.log(person))
  console.groupEnd();


  console.group('Atspausdinti kiekvieno elemento pilną vardą');
  people.forEach((person) => console.log(`${person.name} ${person.surname}`))
  console.groupEnd();

  console.group('Atspausdinti kiekvieno elemento kūno masės indeksą');
  people.forEach((person) => console.log(`${person.name} ${person.surname} KMI ${(person.weight / ((person.height / 100) * (person.height/ 100)) )}`))
  console.groupEnd();
}
console.groupEnd()


console.group(' 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:')
 {
  console.group('kurių vardas ilgesnis nei 6 simboliai');
  const peopleWithNameLengthMoreThan6Symbols = people.filter((person) => person.name.length > 6)
  console.log(peopleWithNameLengthMoreThan6Symbols)
  console.groupEnd();

  console.group('kurių svoris didesnis nei 80kg');
  const peopleWithWeightMoreThan80 = people.filter((person) => person.weight > 80)
  console.log(peopleWithWeightMoreThan80)
  console.groupEnd();

  console.group('kurie aukštesni nei 185cm');
  const peopleWithHeightMoreThan185 = people.filter((person) => person.height > 185)
  console.log(peopleWithHeightMoreThan185)
  console.groupEnd();
}
console.groupEnd();

console.group(' 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti') 
{
  console.group('ūgius');
  const arrOfHeight = people.map((person) => person.height)
  console.log(arrOfHeight)
  console.groupEnd();

  console.group('svorius');
  const arrOfWeight = people.map((person) => person.weight)
  console.log(arrOfWeight)
  console.groupEnd();

  console.group('ūgius, svorius ir amžius');
  const arrOfHeightWeightAge = people.map((person) => new Object(`${person.height}, ${person.weight}, ${person.age}`))
  console.log(arrOfHeightWeightAge)
  console.groupEnd();

  console.group('KMI indeksus');
  const arrOfKMI = people.map((person) => (` ${(person.weight / ((person.height / 100) * (person.height/ 100)) )}`))
  console.log(arrOfKMI)
  console.groupEnd();

  console.group('KMI indeksus ir amžius');
  const arrOfKMIAndAge = people.map((person) => (` ${(person.weight / ((person.height / 100) * (person.height/ 100)) )} AGE ${person.age}`))
  console.log(arrOfKMIAndAge)
  console.groupEnd();
}
console.group(' 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti')
 {
  console.group('svorių vidurkį')
  const peopleWeightAvg = people.reduce((acc, {weight}) => acc + weight, 0) / people.length
  console.log(peopleWeightAvg)
  console.groupEnd()

  console.group('ūgio vidurkį')
  const peopleHeightAvg = people.reduce((acc, {height}) => acc + height, 0) / people.length
  console.log(peopleHeightAvg)
  console.groupEnd()
}
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group(' ANTRA DALIS 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą')
 {
  class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;
    constructor({name, surname, age, height, weight, sex}) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
    }
    getBMI(){
      return `${(this.weight / ((this.height / 100) * (this.height/ 100)))}`
    }

    toString() {
      return `${this.name}, ${this.surname}, ${this.age}, ${this.height}, ${this.weight}, ${this.sex})`
    }
  }

  arrPeopleWithClass = people.map((person) => new Person(person))
  console.log(arrPeopleWithClass)


  console.group('sukurti vidinį metodą: getBMI()');
  arrPeopleWithClass.forEach((person) => console.log(person.getBMI()))
  console.groupEnd();

  console.group('sukurti vidinį metodą: toString()');
  arrPeopleWithClass.forEach((person) => console.log(person.toString()))
}
  console.groupEnd();

console.group(' 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg')
{
  const filterFemaleYoungerThan20AndWeightMore70 = arrPeopleWithClass.filter((person) => 
  person.age < 20 &&
  person.weight > 70 &&
  person.sex == 'female'
  )
  console.log(filterFemaleYoungerThan20AndWeightMore70)
}
console.groupEnd();

console.group(' 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5')
{
  const filterMaleOlderThan25AnBMILessThan18point5 = arrPeopleWithClass.filter((person) => 
  person.age > 25 &&
  person.getBMI() < 18.5 &&
  person.sex == 'male'
  )
  console.log(filterMaleOlderThan25AnBMILessThan18point5)
}
console.groupEnd();

console.group(' 3. Atrinkti vaikus (iki 16 metu), su antsvoriu (KMI > 30)')
{
  const filterKidWithBMIMoreThan30 = arrPeopleWithClass.filter((person) => 
  person.age <= 16 &&
  person.getBMI() > 30 
  )
  console.log(filterKidWithBMIMoreThan30)
}
console.groupEnd();

console.group(' 4. Atrinkti pensininkus (nuo 65 metu), su antsvoriu (KMI > 30)')
{
  const filterPensionerWithBMIMoreThan30 = arrPeopleWithClass.filter((person) => 
  person.age >= 65 &&
  person.getBMI() > 30 
  )
  console.log(filterPensionerWithBMIMoreThan30)
}
console.groupEnd();

console.group(' 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]')
{
  const filterPeopleWithBMIBetween18point5And25 = arrPeopleWithClass.filter((person) => 
  person.getBMI() < 25 &&
  person.getBMI() > 18.5
  )
  console.log(filterPeopleWithBMIBetween18point5And25)
}
console.groupEnd();