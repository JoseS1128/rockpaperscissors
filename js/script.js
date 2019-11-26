// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){;
    
    let playerChoice = $("#input").val();
    $("#userChoice").text(playerChoice);
    
    let Random = Math.random()

    if (Random > .66) {
        $("#computerChoice").text("rock");
       
    } else if (Random < .66 && Random > .33) {
         $("#computerChoice").text("paper");
       
    } else if (Random < .33) {
         $("#computerChoice").text("scissors");
        
    }  else {
        $("#computerChoice").text("machine broke")
    }

   
});

// DOCUMENT READY FUNCTION BELOW

