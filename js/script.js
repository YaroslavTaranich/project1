"use strict";

const numberOfFilms = +prompt('Skolko filmov?', "");

const persMDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Odin iz poslednikh filmov?', ""),
      b = prompt('Otsenka ot 0 do 10', ""),
      c = prompt('Odin iz poslednikh filmov?', ""),
      d = prompt('Otsenka ot 0 do 10', "");

persMDB.movies[a] = b;
persMDB.movies[c] = d;

console.log(persMDB);