// 1)PREVENT REPEATS 2)GET EVENTFUNCTION 3)GET CAPTIONS 4)FORMAT

var photoCollection = [];


function Photo(name,path,caption) {
  this.name = name;
  this.path = path;
  this.caption = caption;
  this.votes = 0;
  photoCollection.push(this);
}

var cheeseDrake = new Photo ("Chuck-E Cheese", "images/cheesedrake.gif","Skee-ball is Drakes real passion");
var doubleDance = new Photo ("Carlton + Drake", "images/doubledance.gif", "Carlton wants in on the action");
var fruitNinja = new Photo ("FruitNinja Drake","images/fruit.gif", "FruitNinja game going 100");
var gassyDrake = new Photo ("Gassy Drake", "images/gassy.gif", "Truth");
var lightSaber = new Photo ("Jedi Drake", "images/lightsaber.gif", "The Force is strong in this one");
var pizzaChef = new Photo ("Pizza Drake", "images/pizza.gif", "Drake is the original Papa John");
var pokeDrake = new Photo ("pokedrake", "images/pokedrake.gif", "Catchin' Em All");
var hanSolo = new Photo ("Deflecting Drake", "images/shoot.gif", "Its a TRAP!");
var holoDrake = new Photo ("Hologram Drake", "images/starwars.gif", "His moves are our final hope.");
var takeOnMe = new Photo ("Take on Drake", "images/takeonme.gif", "Drake's moves trancend decades");
var tennisPro = new Photo ("Tennis Drake", "images/tennis.gif", "He's like Verdasco on steroids");
var trumpDance = new Photo ("Hotline Trump", "images/trump.gif", "Even Trump can't stop Hotline Bling");


var pickPhoto1 = function() {
  var leftPic = Math.floor(Math.random() * photoCollection.length);
  document.getElementById("pictureOne").src = photoCollection[leftPic].path;
};

var pickPhoto2 = function() {
  var rightPic = Math.floor(Math.random() * photoCollection.length);
  document.getElementById("pictureTwo").src = photoCollection[rightPic].path;
};

// randomCorrect = function () {
//   if(rightPic === leftPic) {
//     pickPhoto2();
//   }
// };

// var castVote = function(event) {  // 1) need to take the clicked button 2) add value to that button 3)return that to a table
//   event.preventDefault();

//   if(!event.target.button1.value === !event.target.button2.value)
//   console.log(pickPhoto1.name + ' had ' + pickPhoto1.votes + ' votes.');
//   pickPhoto1.votes++;
//   photoCollection[rightPic].votes++;
//   console.log(pickPhoto1.name + ' now has ' + pickPhoto1.votes + ' votes.');

//   leftPic.parentNode.removeChild(leftPic);
//   rightPic.parentNode.removeChild(rightPic);

//   pickPhoto1();
//   pickPhoto2();
// }

// var button1 = document.getElementById('button1');
// var button2 = document.getElementById('button2');

// button1.addEventListener('click', castVote);
// button2.addEventListener('click', castVote);

Photo();
pickPhoto1();
pickPhoto2();
// randomCorrect();
