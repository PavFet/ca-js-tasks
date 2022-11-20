console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function returnFirstArrKey(){
   return [numbers[0]];
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  const example1 = returnFirstArrKey(numbers);
  console.log(example1);

}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function firstArrDeleteAndRestore(){
  
     console.log(numbers.slice(1, numbers.length));
     return [numbers[0]];
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  const example1 = firstArrDeleteAndRestore(numbers);
  console.log(example1);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnrLastArr(){
    return [numbers.length];
 }
 const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
 const example1 = returnrLastArr(numbers);
 console.log(example1);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function lastArrDeleteAndRestore(){
  
    console.log(numbers.slice(0, numbers.length - 1));
    return [numbers.length];
 }
 const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
 const example1 = lastArrDeleteAndRestore(numbers);
 console.log(example1);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function restorArrLength(){
  return numbers.length;
}   
const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
const example1 = restorArrLength(numbers);
 console.log(example1);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function printLastArrIndex(){
    const result = numbers.length;
    console.log(result);
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  printLastArrIndex();
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  
  function printEachArrIndexInRow(){
    const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
      const index1 = numbers.indexOf('pirmas');
      const index2 = numbers.indexOf('antras');
      const index3 = numbers.indexOf('trecias');
      const index4 = numbers.indexOf('ketvirtas');
      console.log(index1);
      console.log(index2);
      console.log(index3);
      console.log(index4);
  }
  
  printEachArrIndexInRow();

}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{

  
  function printEachArrValueInRow(){
    for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    }
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];

  printEachArrValueInRow();

}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function printArrIndexAndValueInRow (){
    const index1 = numbers.indexOf('pirmas');
    console.log(index1, numbers.slice(0, 1));
    const index2 = numbers.indexOf('antras');
    console.log(index2, numbers.slice(1, 2));
    const index3 = numbers.indexOf('trecias');
    console.log(index3, numbers.slice(2, 3));
    const index4 = numbers.indexOf('ketvirtas');
    console.log(index4, numbers.slice(3, 4));
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  printArrIndexAndValueInRow ();
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function printArrFromLastArr(){
  
    for (let i = numbers.length - 1; i >= 0; i--){

    console.log(numbers[i]);
  }
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  printArrFromLastArr();
}
console.groupEnd();

console.groupCollapsed('11. Parašykite-------- funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function printEachArrIndexInRow(){
    const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
    for (let i = 0; i < numbers.length; i++); {
      const index1 = numbers.indexOf('pirmas');
      const index2 = numbers.indexOf('antras');
      const index3 = numbers.indexOf('trecias');
      const index4 = numbers.indexOf('ketvirtas');
      const result = [index1, index2, index3, index4];
      console.log(result);
    }
  }
  printEachArrIndexInRow();
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function printEachArrValue(){
    let numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  console.log(numbers.join());
  }
  printEachArrValue();
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function printArrIndexAndValueInRow (){

    const index1 = [numbers.indexOf('pirmas'), numbers[0]];
    const index2 = [numbers.indexOf('antras'), numbers[1]];
    const index3 = [numbers.indexOf('trecias'), numbers[2]];
    const index4 = [numbers.indexOf('ketvirtas'), numbers[3]];
    console.log(index1, index2, index3, index4 );
  }
  const numbers = ['pirmas', 'antras', 'trecias', 'ketvirtas'];
  printArrIndexAndValueInRow ();
}
console.groupEnd();


