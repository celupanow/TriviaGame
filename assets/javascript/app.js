var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

function display() {
    $("#correct").html(correctAnswers);
    $("#incorrect").html(incorrectAnswers);
    $("#unanswered").html(unanswered);
}




//onclick event to start the game

$("#btn").on("click", function(){

    setTimeout(display, 120000);

    $("#content").hide();
    $("#form").show();

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