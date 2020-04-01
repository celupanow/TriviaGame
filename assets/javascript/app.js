
//declaring variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var seconds = 120;
var clockRunning = false;
var intervalId;

//function timer if the seconds are greater than zero, it decrements seconds and displays the timer
//else it stops the clock and displays the results
function timer() {

    if (seconds > 0){
        seconds--;
        $("#timer").html(seconds);
    } else {
        clearInterval(intervalId);
        clockRunning = false;
        results();
    }

}

//start function starts the timer and sets the clock to running
//calls the timer function
function start() {
    if (!clockRunning) {
      intervalId = setInterval(timer, 1000);
      clockRunning = true;
    }
}

//results function determines how many answers were correct, incorrect, or unanswered
//displays the results
function results() {
    if (!$("input[name=q1]:checked").val()) {
        unanswered++;
    } else {
        var questionOne = $("input[name=q1]:checked").val();

        if (questionOne === "Stratford-Upon-Avon") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }

    if (!$("input[name=q2]:checked").val()) {
        unanswered++;
    } else {
        var questionTwo = $("input[name=q2]:checked").val();

        if (questionTwo === "154") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }

    if (!$("input[name=q3]:checked").val()) {
        unanswered++;
    } else {
        var questionThree = $("input[name=q3]:checked").val();

        if (questionThree === "the Globe") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }

    if (!$("input[name=q4]:checked").val()) {
        unanswered++;
    } else {
        var questionFour = $("input[name=q4]:checked").val();

        if (questionFour === "Hamlet") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }

    if (!$("input[name=q5]:checked").val()) {
        unanswered++;
    } else {
        var questionFive = $("input[name=q5]:checked").val();

        if (questionFive === "Polonius") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }

    $("#form").html("<p>Correct Answers: " + correctAnswers + "</p><br><p>Incorrect Answers: " + incorrectAnswers + "</p><br><p>Unanswered Questions: " + unanswered);
}

//this hides the quiz and the timer
$("#form").hide();
$("#timeLeft").hide();

//onclick event to start the game
$("#btn").on("click", function(){

    //hides the start button and shows the quiz and timer
    $("#content").hide();
    $("#form").show();
    $("#timeLeft").show();

    //starts the timer
    start();
});


//onclick event for the done button
$("#done").on("click", function(){

    //run the results function
    results();
    //stops the clock
    clearInterval(intervalId);
    clockRunning = false;
    $("#timeLeft").hide();
});