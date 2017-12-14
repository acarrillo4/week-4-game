$(document).ready(function() {

    // Set wins/losses/userScore variables to 0
    var wins = 0;
    var losses = 0;
    var userScore;
    // Set variables for the game's random number and crystals
    var randomNum;
    var ranNum1;
    var ranNum2;
    var ranNum3;
    var ranNum4;

    function randomNumberGenerator(startRange, endRange) {
        return Math.floor(Math.random() * (endRange - startRange + 1) + startRange);
    }
    // This function sets up the game
    function reset() {
        //Setting userScore to 0
        userScore = 0;
        // random numbers are assigned to game and crystals
        randomNum = randomNumberGenerator(19, 120);
        ranNum1 = randomNumberGenerator(1, 12);
        ranNum2 = randomNumberGenerator(1, 12);
        ranNum3 = randomNumberGenerator(1, 12);
        ranNum4 = randomNumberGenerator(1, 12);
        //random number, wins, losses, userScore are displayed
        $("#randomNum").text(randomNum);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#userScore").text(userScore);
        // I used the id tags below to log the numbers being chosen.  This is just to better see my code - but this is now commented out, since I know it works
        // $("#ranNum1").text(ranNum1);
        // $("#ranNum2").text(ranNum2);
        // $("#ranNum3").text(ranNum3);
        // $("#ranNum4").text(ranNum4);
    }
    // This function will check the status of the game
    function gameCheck() {
        // When the randomNum and the userScore are equal, the user gets a win added
        if (randomNum === userScore) {
            wins++;
            $("#wins").text(wins);
            alert("CONGRATULATIONS - YOU WON!")
            reset();
        }
        // When the userScore is greater than randomNum, the user gets a win added
        else if (randomNum < userScore) {
            losses++;
            $("#losses").text(losses);
            alert("Womp, womp womp - YOU LOST!")
            reset();
        }
    }
    // This is the initialization of our game
    reset();
    // Setting onClick functions for each crystal
    // Adding value to userScore: Each time the crystal is clicked, the userScore gets updated in the document
    $("#crystal1").click(function() {
        userScore += ranNum1;
        $("#userScore").text(userScore);
        gameCheck();
    });
    $("#crystal2").click(function() {
        userScore += ranNum2
        $("#userScore").text(userScore);
        gameCheck();
    });
    $("#crystal3").click(function() {
        userScore += ranNum3
        $("#userScore").text(userScore);
        gameCheck();
    });
    $("#crystal4").click(function() {
        userScore += ranNum4
        $("#userScore").text(userScore);
        gameCheck();
    });

});