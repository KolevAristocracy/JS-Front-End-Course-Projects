/**
 * 
 * @param {Array} arr 
 */

function movies(arr) {
    const moviesInfo = {};

    for (action of arr) {
        if (action.startsWith('addMovie ')) {
            const name = action.substring(9)
            moviesInfo[name] = { name }
        } else if (action.includes("directedBy")) {
            const [movieName, director] = action.split(" directedBy ")
            if (movieName in moviesInfo) moviesInfo[movieName].director = director
        } else if (action.includes("onDate")) {
            const [movieName, date] = action.split(" onDate ")
            if (movieName in moviesInfo) moviesInfo[movieName].date = date
        }
    }
    for (key in moviesInfo) {
        if ("name" in moviesInfo[key] && "director" in moviesInfo[key] && "date" in moviesInfo[key]) {
            console.log(JSON.stringify(moviesInfo[key]));
        }
    }
}



movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])
