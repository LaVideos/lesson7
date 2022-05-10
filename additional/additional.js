// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// class User {
//     id;
//     name;
//     email;
//     address = {};
//     phone;
//     website;
//     company = {};
//
//
//
//???????????????????????????????
//
// Чи можна було б це якось скоротити??
//
//?????????????????????????????7?
//
//
//     constructor(id, name, email, street, suite, city, zipcode, lat, lng, phone, website, companyname,catchPhrase,bs) {
//         this.id = id;
//         this.name = name;
//         this.email = email
//         this.address.street = street;
//         this.address.suite = suite;
//         this.address.city = city;
//         this.address.zipcode = zipcode;
//         let geo = {};
//         geo.lat = lat;
//         geo.lng = lng;
//         this.address.geo = geo;
//         this.phone = phone;
//         this.website = website;
//         this.company.name = companyname;
//         this.company.catchPhrase = catchPhrase;
//         this.company.bs = bs;
//
//
//
//     }
//
//
// }
//
// let user =
//     new User
//     (1, 'Gary', 'fsf@fdf.com', 'Velika', 'Apt 245', 'Hamburg',
//         '4332-32', '-37.3159', '81.1496','1-770-736-8031 x56442','hildegard.org',
//         'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
//
// console.log(user);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }


// ??????????????????????????????????????????????????????????????????
// ??????????????????????????????????????????????????????????????????
// не зрозумів суть цього завдання.
// Потрібно прийняти в конструктор -
// titleOfAttr і actionOfAttr і засунути їх в масив attrs (При тому вони також повинні бути масивами,
// щаб надалі якимось чином розподілити їх один до одного)

// я погорів трохи, максимум до чого дійшов - це те,
// щоб просто додати уже створений масив як аргумент (ну або ...arr і 9999 об'єктів)
// Розумію що завдання не може бути настільки просте - но я здаюсь
// ??????????????????????????????????????????????????????????????????
// ??????????????????????????????????????????????????????????????????



// class Tag {
//     name;
//     action;
//     attrs = {};
//     constructor(name, action,args) { // заздалегідь створений масив
//         this.name = name;
//         this.action = action;
//         if (args.length < 3){
//         this.attrs = args;
//         }else if (args.length > 3){
//             for (let i = 0; i <= 2; i++) {
//                 this.attrs[i] = args[i]
//             }
//         }
//     }

    // constructor(name, action,...args) { // 9999999999999 аргументів
    //     this.name = name;
    //     this.action = action;
    //     if (args.length < 3){
    //         this.attrs = args;
    //     }else if (args.length > 3){
    //         for (let i = 0; i <= 2; i++) {
    //             this.attrs[i] = args[i]
    //         }
    //     }
    // }
// }




// let args = [
//     {titleOfArrs: 'id',actionOfAttr: 'id' },
//     {titleOfArrs: 'name', actionOfAttr: 'name'},
//     {titleOfArrs: 'class', actionOfAttr: 'class'},
//     {titleOfArrs: 'title', actionOfAttr: 'title'},
//     {titleOfArrs: 'style', actionOfAttr: 'style'},
// ];
// let tag = new Tag('b','makes bold',args);
// console.log(tag);




// let args1 = {titleOfArrs: 'id',actionOfAttr: 'id' };
// let args2 = {titleOfArrs: 'name', actionOfAttr: 'name'};
// let args3 = {titleOfArrs: 'class', actionOfAttr: 'class'};
// let args4 = {titleOfArrs: 'title', actionOfAttr: 'title'};
// let args5 = {titleOfArrs: 'style', actionOfAttr: 'style'};
//
//
// let tag2 = new Tag('img', 'add picture', args1,args2,args3,args4,args5);
// console.log(tag2)