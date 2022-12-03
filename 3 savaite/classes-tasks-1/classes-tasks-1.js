/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/




// 1
class Car {
  // brand;
  // model;
  // price;
constructor (brand, model, price) {
this.brand = brand;
this.model = model;
this.price = price;
}

// 5
priceIncrease () {
  return this.price + 100;
}



}

// 2

 const car1 = new Car('Opel', 'Vectra', 1000);
 const car2 = new Car('VW', 'Passat', 2000);
 const car3 = new Car('Jaguar', 'XF', 5000);


// 3
console.log('%c Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose', 'background: #222; color: #bada55' )
 console.log(car1);
 console.log(car2);
 console.log(car3);

 
//  4
console.log('%c Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus)', 'background: #222; color: #bada55' )

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);

console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);

// 6
console.log('%c Padidinkite Automobilis objektų kainas šimtu ir vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.', 'background: #222; color: #bada55' )

console.log(car1.priceIncrease());
console.log(car2.priceIncrease());
console.log(car3.priceIncrease());

