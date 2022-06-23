

//Images1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "Dice" + randomNumber1 + ".png";
var randomImageSource1 = "./Images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)

//Images2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "Dice" + randomNumber2 + ".png";
var randomImageSource2 = "./Images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One is Winner"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player two is Winner";
}
else {
    document.querySelector("h1").innerHTML = "No One Win";
}
function refresh() {
    set("location.reload(true);");
}
window.onload = refresh();


