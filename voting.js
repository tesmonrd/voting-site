
var photoCollection = [];


function Photo(name,path) {
  this.name = name;
  this.path = path;
  photoCollection.push(this);
}

var cheeseDrake = new Photo ("Skee-ball is Drakes real passion", "images/cheesedrake.gif");
var doubleDance = new Photo ("Carlton wants in on the action", "images/doubledance.gif");
var fruitNinja = new Photo ("FruitNinja game going 100", "images/fruit.gif");
var gassyDrake = new Photo ("Truth", "images/gassy.gif");
var lightSaber = new Photo ("The Force is strong in this one", "images/lightsaber.gif");
var pizzaChef = new Photo ("Drake is the original Papa John", "images/pizza.gif");
var pokeDrake = new Photo ("Catchin' Em All", "images/pokedrake.gif");
var hanSolo = new Photo ("Its a TARP!", "images/shoot.gif");
var holoDrake = new Photo ("His moves are our final hope.", "images/starwars.gif");
var takeOnMe = new Photo ("Drake's moves trancend decades", "images/takeonme.gif");
var tennisPro = new Photo ("He's like Verdasco on steroids", "images/tennis.gif");
var trumpDance = new Photo ("Even Trump can't stop Hotline Bling", "images/trump.gif");

console.log(cheeseDrake);
var pickPhoto1 = function() {
  var leftPic = Math.floor(Math.random() * photoCollection.length);
  document.getElementById("pictureOne").src = photoCollection[leftPic].path;
};
var pickPhoto2 = function() {
  var rightPic = Math.floor(Math.random() * photoCollection.length);
  document.getElementById("pictureTwo").src = photoCollection[rightPic].path;
};

Photo();
pickPhoto1();
pickPhoto2();
