var randomNumber1 = Math.floor((Math.random()*6))+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor((Math.random()*6))+1;
console.log(randomNumber2);


var path1 = "images/dice" + randomNumber1 + ".png";
var path2 = "images/dice" + randomNumber2 + ".png";

var image = document.querySelectorAll("img");
image[0].setAttribute("src",path1);
image[1].setAttribute("src",path2);

//document.getElementById("img2").src = path2;


var h1 = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player 2 Wins";
}
else {
  h1.innerHTML = "DRAW";
}
