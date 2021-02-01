"use strict";

const persMDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        persMDB.count = +prompt('Сколько фильмов зырил, мразь?', "");
        while (persMDB.count == '' || persMDB.count == null || isNaN(persMDB.count)) {
            persMDB.count = +prompt('Сколько фильмов зырил, мразь?', "");
        }
    },
    detectPersonaLevel: function () {
        if (persMDB.count < 10) {
            console.log('"Просмотрено довольно мало фильмов"');
        } else if (persMDB.count >= 10 && persMDB.count < 30) {
            console.log('"Вы классический уебан"');
        } else if (persMDB.count >= 30) {
            console.log('"Вы киноман"');
        } else {
            console.log('"Произошла ошибка"');
        }
    },
    rememberMyFilms: function () {
        for (let i = 1; i < 3; i++) {
            const a = prompt('Odin iz poslednikh filmov?', ""),
                b = prompt('Otsenka ot 0 do 10', "");

            if (a != null && b != null && a != "" && b != '' && a != a.length < 50) {
                persMDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('err');
                i--;
            }
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(persMDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4;) {
            persMDB.genres[i - 1] = prompt("Ваш любимый жанр под номером " + i, "").toLowerCase();
            persMDB.genres.sort();
            if (persMDB.genres[i - 1] != "" && persMDB.genres[i - 1] != null) {
                i++;
            }
        }
        persMDB.genres.forEach(function (genres, i) {
            // console.log("Любимый жанр #" + (i + 1) + "- это " + genres + ".");
            console.log(`Любимый жанр #" ${i + 1}- это ${genres}.`);
        })
    },
    toggleVisibleMyDB: function () {
        if (persMDB.privat) {
            persMDB.privat = false;
        } else {
            persMDB.privat = true;
        }
    },
};

// persMDB.start();
// // rememberMyFilms();
// // persMDB.toggleVisibleMyDB(persMDB.privat);
// persMDB.detectPersonaLevel();
// persMDB.showMyDB(persMDB.privat);
persMDB.writeYourGenres();
 






// let n=10;
// while ( n <= 100){
//     console.log(n);
//     ++n;
// }

// do{
//     console.log(n);
//     ++n;
// }while (n <= 15);

// for(let i = 1; i < 9; i++){
//     if(i == 2 || i == 4){
//         continue;
//     }
//     console.log(i);
//     console.log(n=n+4);

// }

// const str = 'тест';

// console.log(str.toLocaleUpperCase());

// const logg = "PUPA i ZALUPA";
// console.log(logg.slice(5));
// console.log(logg.substring(7, 13));
// console.log(logg.substr(0, 4));

// const num = 12.4;
// console.log(Math.round(num));

// const test = "122.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));



// function learnJS(lang, callback){
//     callback();
//     console.log(`я учу: ${lang}`);

// }
// function done(){
//     console.log(`ya s'el deda`);
// }

// learnJS('tebya jit', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     hight: 720,
//     colors: {
//         border: 'black',
//         bg: 'red',
//         text: 'blue',
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg, text} = options.colors;
// console.log(text);
// let count = 0;
// // delete options.name;

// for(let key in options) {
//     if (typeof(options[key]) === 'object'){
//         // console.log(`Свойство: ${key}:`);
//         for (let i in options[key]){
//             console.log(`Свойство: ${i} | Значение: ${options[key][i]}`);
//             count++;
//         }
//     } else{
//         console.log(`Свойство: ${key} | Значение: ${options[key]}`);
//         count++;
//     }
// }
// console.log(count);

// console.log(Object.keys(options.colors).length);

// const arr = [1, 2, 33, 4, 5, 7];
// // arr.pop();
// // arr.push(1000);
// // console.log(arr);

// arr.forEach(function(item, i, arr){
//     console.log(`${i} v ${item}`);
// })
 
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// // }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// let obj = {
//     a: 5,
//     b: 10
// };

// //const copy = obj;

// copy.b = 100;

// console.log(obj);
// //console.log(copy);

// function copy(mainObj){
//     let objCopy = {};
//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const num = {
//     a: 12,
//     b: 14,
//     c: {
//         x: 14,
//         y: 141
//     }
// };

// const NewNum = copy(num);
// NewNum.c.y = 10000;
// console.log(NewNum);
// console.log(num);

// const add = {
//     d: 17, 
//     e: 20
// };
// const clone = Object.assign({}, add);
// clone.d = 141241;
// console.log(add);
// console.log(clone);

// const oldarr = ['a', 'b', 'c'];
// const newArray = oldarr.slice();
// newArray[1] = "fSWGAwrg";
// console.log(newArray);
// console.log(oldarr);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['WP', 'LJ', "blogger"],
//       internet = [...video, "VK", "instagram", ...blogs];

// console.log(internet); 

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const n = [2, 5, 131];
// log(...n);

// const arrr = ["a", "b"];
// const Narrr = [...arrr];
// const q = {
//     one: 1,
//     qr: 14,
//     1414: 1411232;
// };
// const qq = {...q};

// const soldier = {
//     health: 1488,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hell No');
//     }
// };

// const Jonh = {
//     health: 134
// };

// // Jonh.__proto__ = soldier;
// Object.setPrototypeOf(Jonh, soldier);
// // console.log(Jonh);
// Jonh.sayHello();

// const jonh = Object.create(soldier);
// jonh.sayHello();