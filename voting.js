var data;
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
var pokeDrake = new Photo ("Pokedrake", "images/pokedrake.gif", "Catchin' Em All");
var hanSolo = new Photo ("Deflecting Drake", "images/shoot.gif", "Its a TRAP!");
var holoDrake = new Photo ("Hologram Drake", "images/starwars.gif", "His moves are our final hope.");
var takeOnMe = new Photo ("Take On Drake", "images/takeonme.gif", "Drake's moves trancend decades");
var tennisPro = new Photo ("Tennis Drake", "images/tennis.gif", "He's like Verdasco on steroids");
var trumpDance = new Photo ("Hotline Trump", "images/trump.gif", "Even Trump can't stop Hotline Bling");
var rightPic;
var leftPic;
var pictureOne = document.getElementById("pictureOne");
var pictureTwo = document.getElementById("pictureTwo");
var chartName = [];


// ++++++Photo&Caption Display+++++++//
var pickPhoto1 = function() {
  leftPic = Math.floor(Math.random() * photoCollection.length);
  pictureOne.src = photoCollection[leftPic].path;
  document.getElementById("capOne").innerHTML = photoCollection[leftPic].caption;
};

var pickPhoto2 = function() {
  do {
    rightPic = Math.floor(Math.random() * photoCollection.length);
  } while(leftPic === rightPic)
  pictureTwo.src = photoCollection[rightPic].path;
  document.getElementById("capTwo").innerHTML = photoCollection[rightPic].caption;
};

function checkLocal() {
  if(localStorage.chartChart) {
    data = JSON.parse(localStorage.chartChart);
  } else {
    data = {
    labels : chartName,
    datasets : [
        {
            label: "",
            fillColor: "rgba(73,108,137,0.5)",
            strokeColor: "rgba(0,100,153,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data:[0,0,0,0,0,0,0,0,0,0,0,0]
        }
    ]
    }
  }
}; checkLocal();

// ++++++ButtonEVENT+++++ //
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

var addPoints1 = function() {
  photoCollection[leftPic].votes++;
  myBarChart.datasets[0].bars[leftPic].value = photoCollection[leftPic].votes;
  myBarChart.update();
  localStorage.setItem('chartChart',JSON.stringify(myBarChart.datasets));
  resetPictures();
};
var addPoints2 = function(){
  photoCollection[rightPic].votes++;
  myBarChart.datasets[0].bars[rightPic].value = photoCollection[rightPic].votes;
  myBarChart.update();
  localStorage.setItem('chartChart',JSON.stringify(myBarChart.datasets));
  resetPictures();
};

button1.addEventListener('click', addPoints1);
button2.addEventListener('click', addPoints2);

var resetPictures = function () {
    pickPhoto1();
    pickPhoto2();
};

document.getElementById('refresh').addEventListener('click', resetPictures);
resetPictures();

function nameGrab() {
  for(var i=0; i<photoCollection.length; i++) {
    chartName[i] = photoCollection[i].name;
  }
};
nameGrab();

// ++++++++++++++CANVAS+++++++++++++++//
var data = {
    labels : chartName,
    datasets : [
        {
            label: "",
            fillColor: "rgba(73,108,137,0.5)",
            strokeColor: "rgba(0,100,153,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data:[0,0,0,0,0,0,0,0,0,0,0,0]
        }
    ]
};

var context=document.getElementById('voteGraph').getContext('2d');
var myBarChart = new Chart(context).Bar(data,
  {
  scaleShowVerticalLines: false,
  scaleShowHorizontalLines: true,
  barStrokeWidth: 3
});
// ++++++++++++++Storage++++++++++++++++++//



