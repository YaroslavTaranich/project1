"use strict";

const numberOfFilms = +prompt('Skolko filmov?', "");

const persMDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(persMDB.count < 10) {
    console.log('"Просмотрено довольно мало фильмов"');
}else if(persMDB.count >= 10 && persMDB.count < 30){
    console.log('"Вы классический уебан"');
}else if(persMDB.count >= 30){
    console.log('"Вы киноман"');
}else{
    console.log('"Произошла ошибка"');
}

for(let i = 1; i < 3; i++){  
    const a = prompt('Odin iz poslednikh filmov?', ""),
          b = prompt('Otsenka ot 0 do 10', "");

    if (a != null && b != null && a != "" && b !='' && a != a.length < 50) {
        persMDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('err');
        i--;
    }
    
}
console.log(persMDB);


 

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