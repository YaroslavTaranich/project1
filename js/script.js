"use strict";

let numberOfFilms;

start();

const persMDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


function start() {
    numberOfFilms = +prompt('Сколько фильмов зырил, мразь?', "");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов зырил, мразь?', "");
    }
}
function detectPersonaLevel() {
    if (persMDB.count < 10) {
        console.log('"Просмотрено довольно мало фильмов"');
    } else if (persMDB.count >= 10 && persMDB.count < 30) {
        console.log('"Вы классический уебан"');
    } else if (persMDB.count >= 30) {
        console.log('"Вы киноман"');
    } else {
        console.log('"Произошла ошибка"');
    }
}
function rememberMyFilms() {
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
}
function showMyDB(hidden){
    if(!hidden){
        console.log(persMDB);
    }
}
function writeYourGenres(){
    for(let i = 1; i < 4;){
        persMDB.genres[i-1] = prompt("Ваш любимый жанр под номером " + i++, "");
    }
}


// rememberMyFilms();
detectPersonaLevel();
showMyDB(persMDB.privat);
writeYourGenres();
 

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