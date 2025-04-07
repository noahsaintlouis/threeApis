//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.getElementById('getGenreBtn').addEventListener('click', getGenre);

function getGenre(){

fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data
    })
    .catch(err=> {
    console.log(`error${err}`)
    });
   }
