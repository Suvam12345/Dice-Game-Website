var randomNumber1=Math.floor(Math.random()*6)+1; //'Math.random()' gives a no. between 0 to 0.999... . 'Math.floor' converts to integer. 'Math.floor(Math.random()*6)' gives a no. between 0 to 5. 'Math.floor(Math.random()*6)+1' gives a no. between 1 to 6.
var randomDiceImage="dice"+randomNumber1+".png"; //'dice1.png' to 'dice6.png'
var randomImageSource="img_Dicee Game/"+randomDiceImage; //'img_Dicee Game/dice1.png' to 'img_Dicee Game/dice6.png'
var image1=document.querySelectorAll("img")[0]; //'querySelectorAll' is used as we want to select all 'img's.
image1.setAttribute("src",randomImageSource); //1st parameter is what it is & 2nd one is after changing what we want it to be.

var randomNumber2=Math.floor(Math.random()*6)+1; //'Math.random()' gives a no. between 0 to 0.999... . 'Math.floor' converts to integer. 'Math.floor(Math.random()*6)' gives a no. between 0 to 5. 'Math.floor(Math.random()*6)+1' gives a no. between 1 to 6.
var randomImageSource2="img_Dicee Game/dice"+randomNumber2+".png"; //'img_Dicee Game/dice1.png' to 'img_Dicee Game/dice6.png'
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); //'querySelectorAll' is used as we want to select all 'img's. 1st parameter of 'setAttribute()' is what it is & 2nd one is after changing what we want it to be.

if(randomNumber1 > randomNumber2){ //If player 1 wins
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}