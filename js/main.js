//holds how many times a player has won
var p1Lives = 4;
var p2Lives = 4;
//holds a players wins
var p1Wins=0;
var p2Wins=0;

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

/*window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
}*/
//this part checks what was clicked and pust the appropriate X or O depending on whos yurn it is
window.onclick = e => {
    var those = e.target.innerHTML;
    console.log(e.target.innerHTML);
    let that = e.target.id;
    if(those!=="X"){
        if(those !=="O"){
           if(turn==true){
            document.getElementById(that).innerHTML = "X";
            turn=false;
        }
        else if(turn==false){
            document.getElementById(that).innerHTML = "O";
            turn=true;
        }  
        
  
    }
    
}

 
}
//this checks to for a winner
    //X  win conditions for x vertical
    setInterval(function(){ if(a1.innerHTML=="X"&&b1.innerHTML=="X"&&c1.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"
     //this is a reset it gets it ready for next round   it get rid of all the x's and o's and makes it X's turn again as well as taking a life from the opponent it also takes a life from the loser this is the same for all the next else if statements
        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1;
    }
    else if(a2.innerHTML=="X"&&b2.innerHTML=="X"&&c2.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }
    else if(a3.innerHTML=="X"&&b3.innerHTML=="X"&&c3.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }
    //wins conditions for x horizontol
    else if(a1.innerHTML=="X"&&a2.innerHTML=="X"&&a3.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }
    else if(b1.innerHTML=="X"&&b2.innerHTML=="X"&&b3.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }
    else if(c1.innerHTML=="X"&&c2.innerHTML=="X"&&c3.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }
    //win conditions for x tilted /
    else if(a1.innerHTML=="X"&&b2.innerHTML=="X"&&c3.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }
    else if(a3.innerHTML=="X"&&b2.innerHTML=="X"&&c1.innerHTML=="X"){
                document.getElementById("winner").innerHTML="Round goes to player1"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p2Lives-=1

    }

    //this is the same as above except for player2 instead of one
    else if(a1.innerHTML=="O"&&b1.innerHTML=="O"&&c1.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    else if(a2.innerHTML=="O"&&b2.innerHTML=="O"&&c2.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    else if(a3.innerHTML=="O"&&b3.innerHTML=="O"&&c3.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    //wins conditions for x horizontol
    else if(a1.innerHTML=="O"&&a2.innerHTML=="O"&&a3.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    else if(b1.innerHTML=="O"&&b2.innerHTML=="O"&&b3.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    else if(c1.innerHTML=="O"&&c2.innerHTML=="O"&&c3.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    //win conditions for x tilted /
    else if(a1.innerHTML=="O"&&b2.innerHTML=="O"&&c3.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    else if(a3.innerHTML=="O"&&b2.innerHTML=="O"&&c1.innerHTML=="O"){
                document.getElementById("winner").innerHTML="Round goes to player 2"

        a1.innerHTML="-";
        a2.innerHTML="-";
        a3.innerHTML="-";
        b1.innerHTML="-";
        b2.innerHTML="-";
        b3.innerHTML="-";
        c1.innerHTML="-";
        c2.innerHTML="-";
        c3.innerHTML="-";
        turn=true;
        p1Lives-=1

    }
    if(a1.innerHTML=="X" || a1.innerHTML=="O"){
         if(a2.innerHTML=="X" || a2.innerHTML=="O"){
             if(a3.innerHTML=="X"||a3.innerHTML=="O"){
        if(b1.innerHTML=="X" || b1.innerHTML=="O"){ 
            if(b2.innerHTML=="X" || b2.innerHTML=="O"){
                if(b3.innerHTML=="X"||b3.innerHTML=="O"){
            if(c1.innerHTML=="X" || c1.innerHTML=="O"){
                if(c2.innerHTML=="X" || c2.innerHTML=="O"){
                if(c3.innerHTML=="X"||c3.innerHTML=="O"){
                a1.innerHTML="-";
                a2.innerHTML="-";
                a3.innerHTML="-";
                b1.innerHTML="-";
                b2.innerHTML="-";
                b3.innerHTML="-";
                c1.innerHTML="-";
                c2.innerHTML="-";
                c3.innerHTML="-";
                turn=true;
                document.getElementById("winner").innerHTML="tie no round winner"
                }
            }
        }

        }
        }
    }
    }
    }
}
    //
    if(p1Lives<=0){
        document.getElementById("winner").innerHTML="Player 2 wins"
        p2Wins+=1;
        p1Lives=4;
        p2Lives=4;
    }
    else if(p2Lives<=0){
        document.getElementById("winner").innerHTML="Player 1 wins"
        p1Wins+=1;
        p1Lives=4;
        p2Lives=4;

    }
    document.getElementById("p1Lives").innerHTML=p1Lives;
    document.getElementById("p2Lives").innerHTML=p2Lives;
    document.getElementById("p1-wins").innerHTML=p1Wins;
    document.getElementById("p2-wins").innerHTML=p2Wins; 
    }, 400);
/*function winnerWinner(){
  
}*/

 //setInterval(winnerWinner(),1000)



//reset button just in the case of a tie with no winner
function tic() {
    a1.innerHTML="-";
    a2.innerHTML="-";
    a3.innerHTML="-";
    b1.innerHTML="-";
    b2.innerHTML="-";
    b3.innerHTML="-";
    c1.innerHTML="-";
    c2.innerHTML="-";
    c3.innerHTML="-";
    turn=true;
    p1Wins=0;
    p2Wins=0;
    p1Lives=4;
    p2Lives=4;
};

function tac() {

};

function toe(){

};
