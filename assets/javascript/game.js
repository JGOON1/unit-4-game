$(document).ready(function () {


    var wins = 0;
    var loss = 0;
    var selectedNumber;
    var currentScore = 0;


    function reset(){

        // selectedNumber is random number picked in the beginning to match.
        selectedNumber = Math.floor(Math.random() * 101) + 19;
        $('#selectedNumber').text(selectedNumber);
        
        // each gem is assign random value between 1-12 in the beginning. and given an a attribut value.
        var gem1 = Math.floor(Math.random() * 12) + 1;
        $("#gem1").attr("minValue", gem1);
        // console.log(gem1);
        
        var gem2 = Math.floor(Math.random() * 12) + 1;
        $("#gem2").attr("minValue", gem2);
        // console.log(gem2);
        
        var gem3 = Math.floor(Math.random() * 12) + 1;
        $("#gem3").attr("minValue", gem3);
        // console.log(gem3);
        
        var gem4 = Math.floor(Math.random() * 12) + 1;
        $("#gem4").attr("minValue", gem4);
        // console.log(gem4);
        
    }
        
    
    // need to create click event to update values to the score
    // on click event, new var crystalValue is equal to the minValue given above. parseInt turns the string into a number
    // currentScore equals the values of the minerals when clicked
    $(".gems").on("click", function() {
        var crystalValue = ($(this).attr("minValue"));
        crystalValue = parseInt(crystalValue)
        
        currentScore += crystalValue;
        
        // update dom text with the current score
        $("#score").text(currentScore);
        console.log(score);
        
        // id #wins #loss
        if (currentScore === selectedNumber) {
            wins++;
            $("#wins").text(wins);
            currentScore = 0;
            $("#score").text(currentScore);
            reset();
            
            
        } 
        else if (currentScore > selectedNumber) {
            loss++;
            $("#loss").text(loss);
            currentScore = 0;
            $("#score").text(currentScore);
            reset();      
        };
        
    });  

    reset();
        
        
                
                
        
        
});