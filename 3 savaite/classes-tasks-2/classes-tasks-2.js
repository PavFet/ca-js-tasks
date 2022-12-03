console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY, Create a class that takes the following four arguments for a particular football player. Also, create three functions for the class that returns the following strings getAge() returns "name is age age....');
{
  class Player {
    constructor(name, age, height, weight) {
     this.name = name;
     this.age = age;
     this.height = height;
     this.weight = weight;
    }
    
    getAge() {
      return this.name + ' ' + 'is age' + ' ' + this.age;
    }
  
    getHeight() {
      return this.name + ' ' + 'is' + ' ' + this.height +  'cm';
    }
      
    getWeight() {
      return this.name + ' ' + 'weighs' + ' ' + this.weight + 'kg';
    }
  }		

 const p1 = new Player("David Jones", 25, 175, 75);
 console.log('%c arr  =  Player("David Jones", 25, 175, 75)', 'background: #222; color: #bada55');
 console.log(p1.getAge()); 
 console.log(p1.getHeight());
 console.log(p1.getWeight()); 
 


}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM, Create functions for the Calculator class that can do the following Add two numbers. Subtract two numbers. Multiply two numbers. Divide two numbers.');
{
  class Calculator {
    constructor (a, b){
      this.a = a;
      this.b = b;
    }
    add () {
      return this.a + this.b;
    }
    subtract () {
      return this.a - this.b;
    }
    multiply () {
      return this.a * this.b;
    }
    divide () {
      return this.a / this.b;
    }
  }

  const calculator = new Calculator(10, 5);

calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);

console.log('%c ADD (10, 5) =>', 'background: #222; color: #bada55', calculator.add());
console.log('%c SUBTRACT (10, 5) =>', 'background: #222; color: #bada55',calculator.subtract());
console.log('%c MULTIPLY (10, 5) =>', 'background: #222; color: #bada55',calculator.multiply());
console.log('%c DIVIDE (10, 5) =>', 'background: #222; color: #bada55',calculator.divide());
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS Create the instance properties fullname and email in the Employee class. Given a persons first and last names: Form the fullname by simply joining the first and last name together, separated by a space. Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    printFirstname (){
      return console.log(`${this.firstname}`);
    }
    printFullname (){
      return console.log(`${this.firstname} ${this.lastname}`);
    }
    printEmail () {
      return console.log((`${this.firstname}.${this.lastname}@company.com`).toLowerCase());
    }
  }


  emp1 = new Employee("John", "Smith");
  emp2 = new Employee("Mary",  "Sue");
  emp3 = new Employee("Antony", "Walker");
  emp4 = new Employee("Joshua", "Senoron");
  console.log('%c Fullname', 'background: #222; color: #bada55');
  emp1.printFullname();
  emp2.printFullname();
  emp3.printFullname();
  emp4.printFullname();
  console.log('%c Firstname', 'background: #222; color: #bada55');
  emp1.printFirstname();
  emp2.printFirstname();
  emp3.printFirstname();
  emp4.printFirstname();
  console.log('%c Email', 'background: #222; color: #bada55');
  emp1.printEmail();
  emp2.printEmail();
  emp3.printEmail();
  emp4.printEmail();
  


}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu Create a method in the Person class which returns how another persons age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format: {other person name} is {older than / younger than / the same age as} me.');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {

      if (this.age < other.age) {
        return console.log(`${other.name} is older than me.`);
        
      }
      if (this.age == other.age) {
        return console.log(`${other.name} is the same age as me.`);
      }
      else {
        return console.log(`${other.name} is younger than me`);
      }


      
      
    }
  }
p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);
console.log('%c Arrays:', 'background: #222; color: #bada55; font-size: 1.2rem');
console.log('%c p1 ("Samuel", 24)', 'background: #222; color: #bada55');
console.log('%c p2 ("Joel", 36)', 'background: #222; color: #bada55');
console.log('%c p3 ("Lily", 24)', 'background: #222; color: #bada55');
p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference). For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.');
{

  
  
  class Circle {
    constructor(radius) {
      this.radius = radius
    }
    getArea() {
      return    Math.PI * (this.radius * this.radius);
    }
    getPerimeter () {
      return 2 * Math.PI * this.radius;
    }
  }




let q = new Circle(11);
console.log('%cgetArea(radius=11)', 'background: #222; color: #bada55;', q.getArea());
console.log('%cgetPerimeter(radius=11)', 'background: #222; color: #bada55;',q.getPerimeter());


// let circy = new Circle(11);
// circy.getArea();

let circy = new Circle(4.44);
console.log('%cgetArea(radius=4.44)', 'background: #222; color: #bada55;',circy.getArea());
console.log('%cgetPerimeter(radius=4.44)', 'background: #222; color: #bada55;',circy.getPerimeter());
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b Write a class called Name and create the following attributes given a first name and last name (as fname and lname): An attribute called fullname which returns the first and last names. An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters. Remember to allow the attributes fname and lname to be accessed individually as well.');
{
  class Name {
    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    fname () {
      return console.log(this.firstname[0].toUpperCase() + this.firstname.slice(1));
    }
    lname () {
      return console.log(this.lastname[0].toUpperCase() + this.lastname.slice(1).toLowerCase());
    }
    fullname (){
      return console.log(this.firstname[0].toUpperCase() + this.firstname.slice(1), this.lastname[0].toUpperCase() + this.lastname.slice(1).toLowerCase());
    }
    initials () {
      return console.log(`${this.firstname[0].toUpperCase()}.${this.lastname[0].toUpperCase()}`);
    }
  }

  a1 = new Name("john", "SMITH");
  console.log('%ca1 = new Name("john", "SMITH");', 'background: #222; color: #bada55;');
  console.log('%ca1.fname()', 'background: #222; color: #bada55;'); a1.fname();
  console.log('%ca1.lname()', 'background: #222; color: #bada55;'); a1.lname();
  console.log('%ca1.fullname()', 'background: #222; color: #bada55;'); a1.fullname();
  console.log('%ca1.initials()', 'background: #222; color: #bada55;'); a1.initials();


}
console.groupEnd();

console.groupCollapsed('7. -  Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  function sweetestIcecream(arr) {
    const sweetValue = {
      "Plain" : 0,
      "Vanilla" :	5,
      "ChocolateChip" :	5,
      "Strawberry"	: 10,
      "Chocolate" :	10
    };
    let result = arr.map(arr => sweetValue[arr.flavor] + arr.numSprinkles);
    return console.log(Math.max(...result));
    
  }


  ice1 = new IceCream("Chocolate", 13);
  ice2 = new IceCream("Vanilla", 0);
  ice3 = new IceCream("Strawberry", 7);
  ice4 = new IceCream("Plain", 18);
  ice5 = new IceCream("ChocolateChip", 3);
  ice6 = new IceCream("Chocolate", 23);
  ice7 = new IceCream("Strawberry", 0);
  ice8 = new IceCream("Plain", 34);
  ice9 = new IceCream("Plain", 81);
  ice10 = new IceCream("Vanilla", 12);

  console.log('%cice1 = new IceCream("Chocolate", 13);', 'background: #222; color: #bada55;');
  console.log('%cice2 = new IceCream("Vanilla", 0);', 'background: #222; color: #bada55;');
  console.log('%cice3 = new IceCream("Strawberry", 7);', 'background: #222; color: #bada55;');
  console.log('%cice4 = new IceCream("Plain", 18);', 'background: #222; color: #bada55;');
  console.log('%cice5 = new IceCream("ChocolateChip", 3);', 'background: #222; color: #bada55;');
  console.log('%cice6 = new IceCream("Chocolate", 23);', 'background: #222; color: #bada55;');
  console.log('%cice7 = new IceCream("Strawberry", 0);', 'background: #222; color: #bada55;');
  console.log('%cice8 = new IceCream("Plain", 34);', 'background: #222; color: #bada55;');
  console.log('%cice9 = new IceCream("Plain", 81);', 'background: #222; color: #bada55;');
  console.log('%cice10 = new IceCream("Vanilla", 12);', 'background: #222; color: #bada55;');
console.log('%csweetestIcecream([ice1, ice2, ice3, ice4, ice5]', 'background: #222; color: #bada55;');
sweetestIcecream([ice1, ice2, ice3, ice4, ice5]);
console.log('%csweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2])', 'background: #222; color: #bada55;');

sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]);
console.log('%csweetestIcecream([ice10, ice10, ice6, ice8, ice4])', 'background: #222; color: #bada55;');

sweetestIcecream([ice10, ice10, ice6, ice8, ice4]);
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.');

 class OnesThreesNines {
    
  constructor (number) {
    this.number = number;
  }
  nines () {
    if(this.number >= 9) {
      let result = Math.floor(this.number / 9);
      console.log(result);
      return;
    }
    else {
      console.log(0);
    }
  }
  ones () {
    if(this.number >= 1) {
      let result = Math.floor(this.number / 1);
      console.log(result);
      return;
    }
    else {
      console.log(0);
    }
 }
 threes () {
  if(this.number >= 3) {
    let result = Math.floor(this.number / 3);
    console.log(result);
    return;
  }
  else {
    console.log(0);
  }
}};


console.log('%cn1 = new OnesThreesNines(30)', 'background: #222; color: #bada55;');
let n1 = new OnesThreesNines(30);
console.log('%cn1.nines():', 'background: #222; color: violet;');
  n1.nines();
  console.log('%cn1.threes():', 'background: #222; color: violet;');
  n1.threes();
  console.log('%cn1.ones():', 'background: #222; color: violet;');
  n1.ones();
  
  console.log('%cn2 = new OnesThreesNines(5)', 'background: #222; color: #bada55;');
let n2 = new OnesThreesNines(5);
console.log('%cn2.nines():', 'background: #222; color: violet;');
  n2.nines();
  console.log('%cn2.threes():', 'background: #222; color: violet;');
  n2.threes();
  console.log('%cn2.ones():', 'background: #222; color: violet;');
  n2.ones();
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.');
{
  class User {
    static userCount = 0;

    constructor (name) {
      this.name = name;
    }
    username (){
     return console.log(`"${this.name}"`);
    }
    userCount (){
      return  console.log(User.userCount += 1);
    }
  }


console.log('%cu1.userCount();', 'background: #222; color: #bada55;');
u1 = new User("johnsmith10");
u1.userCount();
console.log('%cu2.userCount();', 'background: #222; color: #bada55;');
u2 = new User("marysue1989");
u2.userCount();
console.log('%cu3.userCount();', 'background: #222; color: #bada55;');
u3 = new User("milan_rodrick");
u3.userCount();

console.log('%cu1.username();', 'background: #222; color: #bada55;');
u1.username();

u2.username();

u3.username();

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn Create a Book constructor that has two properties :Title Author. And two methods: A method named getTitle that returns: "Title: " + the instance title. A method named getAuthor that returns: "Author: " + the instance author. and instantiate this constructor by creating 3 new books: Pride and Prejudice - Jane Austen (PP) Hamlet - William Shakespeare (H) War and Peace - Leo Tolstoy (WP) The name of the new object instances PP, H, and WP, respectively. For instance, if I instantiated the following book using this Book constructor function: Harry Potter - J.K. Rowling (HP)');
{
  class Book {
    constructor (title, author) {
      this.title = title,
      this.author = author
    }
    getTitle(){
     return console.log(`"Title: ${this.title}"`);
    }
    getAuthor(){
     return console.log(`"Author: ${this.author}"`);
    }



  }


const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');
const HP = new Book('Harry Potter', 'J.K. Rowling');

console.log('%cHP Book Harry Potter : J.K. Rowling', 'background: #222; color: #bada55;');
HP.getTitle();
HP.getAuthor();

console.log('%cPP Book Pride and Prejudice : Jane Austen', 'background: #222; color: #bada55;');
PP.getTitle();
PP.getAuthor();


console.log('%cH Book Hamlet : William Shakespeare', 'background: #222; color: #bada55;');
H.getTitle();
H.getAuthor();

console.log('%cWP Book War and Peace : Leo Tolstoy', 'background: #222; color: #bada55;');
WP.getTitle();
WP.getAuthor();

}
console.groupEnd();
