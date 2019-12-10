// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){;
    
    let playerChoice = $("#input").val();
    $("#userChoice").text(playerChoice);
    
    let Random = Math.random()

    let vs = "";

    if (Random > .66) {
        $("#computerChoice").text("rock");
            vs = "rock"; 
    } else if (Random < .66 && Random > .33) {
         $("#computerChoice").text("paper");
            vs = "paper"; 
    } else if (Random < .33) {
         $("#computerChoice").text("scissors");
            vs = "scissors"; 
    }  else {
        $("#computerChoice").text("machine broke")
    }
   
    if (vs === "rock" && playerChoice === "rock") {
        $("#result").text("tie");
        $("body").css("background-color","yellow");
    } else if (vs === "paper" && playerChoice === "rock"){
        $("#result").text("lose");
        $("body").css("background-color","red");
    } else if (vs === "scissors" && playerChoice === "rock"){
        $("#result").text("win");
        $("body").css("background-color","lawngreen");
    }

     if (vs === "rock" && playerChoice === "paper") {
        $("#result").text("win");
        $("body").css("background-color","lawngreen");
    } else if (vs === "paper" && playerChoice === "paper"){
        $("#result").text("tie");
         $("body").css("background-color","yellow");
    } else if (vs === "scissors" && playerChoice === "paper"){
        $("#result").text("lose");
        $("body").css("background-color","red");
    }

      if (vs === "rock" && playerChoice === "scissors") {
        $("#result").text("lose");
        $("body").css("background-color","red");
    } else if (vs === "paper" && playerChoice === "scissors"){
        $("#result").text("win");
        $("body").css("background-color","lawngreen");
    } else if (vs === "scissors" && playerChoice === "scissors"){
        $("#result").text("tie");
        $("body").css("background-color","yellow");
    }
});
 

// DOCUMENT READY FUNCTION BELOW

