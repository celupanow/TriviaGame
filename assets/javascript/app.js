var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var seconds = 20;
var clockRunning = false;
var intervalId;

function timer() {
    seconds--;
    $("#timer").html(seconds);
}

function start() {
    if (!clockRunning) {
      intervalId = setInterval(timer, 1000);
      clockRunning = true;
    }

    if (seconds === 0) {
        clearInterval(intervalId);
        clockRunning = false;
    }
}

    // function stop() {
        
    //   }

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


$("#form").hide();

//onclick event to start the game

$("#btn").on("click", function(){

    $("#content").hide();
    $("#form").show();

    start();


});



$("#done").on("click", function(){

  results();

});

//set timer for 120 seconds & start it

//listen for the radio button values
//$("input[type='button']").click(function(){
    // var radioValue = $("input[name='gender']:checked").val();
    // if(radioValue){
    //     alert("Your are a - " + radioValue);


//keep track of how many correct/incorrect answers

//on click for done

//display correct/incorrect/unanswered when timer runs out or when done button is clicked