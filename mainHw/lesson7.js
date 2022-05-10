// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// class SomePersonIDK {
//     id;
//     name;
//     surname;
//     email;
//     phone;
//
//     constructor(id,name,surname,email,phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
//
// let arrOfPersons = [];
// let superMegaChel = new SomePersonIDK(1,'Eric', 'Cartman', 'fuckyou@.gmail.com', '066666666');
// let deadChel = new SomePersonIDK(3,'Kenny', 'Maccormick', 'iamalreadyDead@.gmail.com', '000000000');
// let ordinaryChel = new SomePersonIDK(4,'Stan', 'Marsh', 'wtf@.gmail.com', '0123456777');
// let jewChel = new SomePersonIDK(2,'Kyle', ' Broflovski', 'fuckCartman@.gmail.com', '099999991');
// let showelChel = new SomePersonIDK(5,'Towelie', '', 'Youwannagethigh@.gmail.com', '69696969696');
// let firstChel = new SomePersonIDK(7,'Nuke', 'Day', 'nukeDay@.gmail.com', '0876543245');
// let secondChel = new SomePersonIDK(6,'Duke', 'Nice', 'duke@.gmail.com', '0767553243');
// let thirdXhel = new SomePersonIDK(9,'Guk', 'Das', 'guk@.gmail.com', '0735357242');
// let againChel = new SomePersonIDK(8,'Jake', 'Kurt', 'kurt@.gmail.com', '0975422784');
// let againagainChel = new SomePersonIDK(10,'Harry', 'Potter', 'garry@.gmail.com', '0675422784');
//
// arrOfPersons.push(firstChel,secondChel,thirdXhel,againChel,againagainChel,superMegaChel,deadChel,ordinaryChel,jewChel,showelChel);




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(arrOfPersons.filter(value => value.id % 2 === 0));



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arrOfPersons.sort((a,b) => a.id - b.id ));




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     id;
//     name;
//     surname;
//     email;
//     phone;
//     order = [];
//
//     constructor(id, name, surname, email, phone, ...order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//
//         for (let i = 0; i < order.length; i++) {
//             this.order[i] = order[i];
//
//         }
//
//     }
//
// }
//
// let superMegaChel = new Client(1, 'Eric', 'Cartman', 'fuckyou@.gmail.com', '066666666', 'Alien probe', 'Mein Kampf', '10 millions$');
// let deadChel = new Client(3, 'Kenny', 'Maccormick', 'iamalreadyDead@.gmail.com', '000000000', 'Orange Jacket','Pink Dress');
// let ordinaryChel = new Client(4, 'Stan', 'Marsh', 'wtf@.gmail.com', '0123456777','Visky','Gitar Hero');
// let jewChel = new Client(2, 'Kyle', ' Broflovski', 'fuckCartman@.gmail.com', '099999991', 'Canada Passport');
// let showelChel = new Client(5, 'Towelie', '', 'Youwannagethigh@.gmail.com', '69696969696', 'Weed', 'Weed grains');
// let firstChel = new Client(7, 'Nuke', 'Day', 'nukeDay@.gmail.com', '0876543245', 'Hobbit', 'South Park Stick of True');
// let secondChel = new Client(6, 'Duke', 'Nice', 'duke@.gmail.com', '0767553243', 'Gitar', 'Phone');
// let thirdXhel = new Client(9, 'Guk', 'Das', 'guk@.gmail.com', '0735357242', 'Laptop');
// let againChel = new Client(8, 'Jake', 'Kurt', 'kurt@.gmail.com', '0975422784', 'Figure of Jesus');
// let againagainChel = new Client(10, 'Harry', 'Potter', 'garry@.gmail.com', '0675422784', 'Sport suit', 'Bible', 'Water Gun');
//
// let arrClients = [];
// arrClients.push(firstChel,secondChel,thirdXhel,againChel,againagainChel,superMegaChel,deadChel,ordinaryChel,jewChel,showelChel);







// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// console.log(arrClients.sort((a,b) => a.order.length - b.order.length));




//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




// function Car(model, producer, year, maxSpeed, capacityOfEngine){
//     this.model = model;
//     this.producer = producer;
//     this.year =year;
//     this.maxSpeed = maxSpeed;
//     this.capacityOfEngine = capacityOfEngine;
//
//     this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     this.info = () => {
//         console.log(`Модель - ${this.model}\nВиробник - ${this.producer}\nPік випуску - ${this.year}\nMаксимальна швидкість -  ${this.maxSpeed}\nOб'єм двигуна - ${this.capacityOfEngine} `);
//     };
//     this.increaseMaxSpeed = newSpeed => this.maxSpeed = newSpeed;
//     this.changeYear = newValue => this.year = newValue;
//     this.addDriver = driver =>this.driver = driver; // це правильно, чи потрібно було якось по-іншому?
//     this.whoIsDriver = () => console.log(`Водій - ${this.driver.name}`) ;
//
//
// }
//
// let firstCar = new Car('Car', 'SomeCompany',2020, 200,100);
// firstCar.drive();
// firstCar.increaseMaxSpeed(300);
// firstCar.changeYear(1923);
// firstCar.info();
//
// let obj = {
//     name: 'Мig',
//     age: 33
// }
//
// firstCar.addDriver(obj);
// firstCar.whoIsDriver();







// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     model;
//     producer;
//     year;
//     maxSpeed;
//     capacityOfEngine;
//
//     constructor(model,producer,year,maxSpeed,capacityOfEngine) {
//          this.model = model;
//          this.producer = producer;
//          this.year = year;
//          this.maxSpeed = maxSpeed;
//          this.capacityOfEngine = capacityOfEngine;
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info(){
//         console.log(`Модель - ${this.model}\nВиробник - ${this.producer}\nPік випуску - ${this.year}\nMаксимальна швидкість -  ${this.maxSpeed}\nOб'єм двигуна - ${this.capacityOfEngine} `);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue){
//         this.year = newValue;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
//     whoIsDriver(){
//         console.log(this.driver);
//     }
//
// }
//
// let car = new Car('Car','?????',2087,450,'none');
//
// car.drive();
// car.increaseMaxSpeed(99999);
// car.changeYear(2056);
// car.info();
// let a = {name: 'Jake', age:'10'};
// car.addDriver(a);
// car.whoIsDriver();






// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella{
//     name;
//     age;
//     footSize;
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let girl1 = new Cinderella('May', '19', 37);
// let girl2 = new Cinderella('Jane', '23', 39);
// let girl3 = new Cinderella('Kate', '21', 36);
// let girl4 = new Cinderella('Lisa', '17', 35);
// let girl5 = new Cinderella('Anna', '18', 37);
// let girl6= new Cinderella('Ella', '19', 38);
// let girl7= new Cinderella('Corraline', '20', 40);
//
// let cinderells = [];
// cinderells.push(girl1,girl2,girl3,girl4,girl5,girl6,girl7);




// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Prince{
//     name;
//     age;
//     shoeFind;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.shoeFind = 38;
//     }
//
//     whoThatGirl(arr){
//         for (let girl = 0; girl < arr.length;girl++) {
//             if(arr[girl].footSize === this.shoeFind){
//                 console.log(arr[girl]);
//             }
//         }
//     }
//
//     whoThatGirl2(arr){
//         return arr.find(a => a['footSize'] === this.shoeFind);
//     }
// }
//
// let prince = new Prince('prince',19);
// prince.whoThatGirl(cinderells);
// console.log(prince.whoThatGirl2(cinderells));

