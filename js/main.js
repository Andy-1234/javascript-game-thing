//holds how many times a player has won
var p1Lives = 4;
var p2Lives = 4;
//holds a players wins
var p1Wins;
var p2Wins;

//this variable holds which person turn it is x=true O=false
var turn = true;
//this is what is used for the part that looks for a winner i is just to make it shorter
var a1 = document.getElementById("1-1");
var a2 = document.getElementById("1-2");
var a3 = document.getElementById("1-3");

var b1 = document.getElementById("2-1");
var b2 = document.getElementById("2-2");
var b3 = document.getElementById("2-3");

var c1 = document.getElementById("3-1");
var c2 = document.getElementById("3-2");
var c3 = document.getElementById("3-3");


window.onbeforeunload = function() {
    return "You will lose your score are you sure you want to do that GAMER";
  };

window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
}
//this part checks what was clicked and pust the appropriate X or O depending on whos yurn it is
window.onclick = e => {
    //console.log(e.target.id);
    let that = e.target.id;
    if(e.target.innerhtml!="X"||e.target.innerhtml!="O"){
        if(turn==true){
            document.getElementById(that).innerHTML = "X";
            turn=false;
        }
        else if(turn==false){
            document.getElementById(that).innerHTML = "O";
            turn=true;
        }
        else{
            //nothing
        }
    }
    else{
        //nothing
    }
//this checks to for a winner
    if(){

    }
}


function tic() {

};

function tac() {

};

function toe(){

};
