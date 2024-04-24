var result = document.getElementById("result");
var dices = document.getElementsByClassName("dice");

const dice_val1 = Math.floor(Math.random()*6)+1;
const dice_val2 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute('src',"resources/img/dice-"+dice_val1+".png");
document.querySelectorAll('img')[1].setAttribute('src',"resources/img/dice-"+dice_val2+".png");

var text = "";

if(dice_val1 > dice_val2){
    text = ("🚩Player 1 Wins!");
} else if(dice_val1 < dice_val2){
    text = ("Player 2 Wins!🚩");
} else {
    text = ("🚩Draw!🚩");
}
result.appendChild(document.createTextNode(text))