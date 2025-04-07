//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#getPop').addEventListener('click', getRandom)

function getRandom(){
const randomId = Math.floor(Math.random() * 826) + 1
fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    document.querySelector('h2').innerText = `Name: ${data.name}`;
    document.querySelector('#species').innerText = `Species: ${data.species}`;
    document.querySelector('#gender').innerText = `Gender: ${data.gender}`;
    document.querySelector('#status').innerText = `Status: ${data.status}`;
    document.querySelector('#origin').innerText = `Origin: ${data.origin.name}`;
    document.querySelector('#location').innerText = `Location: ${data.location.name}`;
    document.querySelector('#characterImage').src = data.image;
})
.catch(err => {
    console.log(`Error: ${err}`);
});
}