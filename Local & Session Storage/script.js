console.log("Local storage");
let countries=['India','Australia','India'];
//Add a Key-value pair inside a local storage
localStorage.setItem("Player1","Sachin");
localStorage.setItem("Player2","Warner");
localStorage.setItem("Player3","Pant");
localStorage.setItem("country",JSON.stringify(countries));//takes an object and returns string

//Clears the entire local storage
//console.log(localStorage.clear()

//Retrieve an item from local Storage
const player=localStorage.getItem("Player1");
const count=JSON.parse(localStorage.getItem("country"));
console.log(player);
console.log(count);


console.log("session storage");
sessionStorage.setItem("Game1","Cricket");
sessionStorage.setItem("Game2","Football");



