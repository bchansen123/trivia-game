
//Global variables
var count = 0;
var countdown;
countdownTime = 60;

//Adding classes to unmask and mask different elements on the page. Put in functions to call later
function addingInvis () {
    $(".invisible").removeClass("invisible");
    $(".invisible2").addClass("invisible");
    $(".startingForm").addClass("invisible");
};

function submitInvis () {
    $(".invApply").addClass("invisible");
    $(".remInv").removeClass("invisible");
}

//Initiate starting the quiz on clicking the submit button
$("#startButton").on("click", function() {
    addingInvis();
    function startTime() {
        clearInterval(countdown);
        countdown = setInterval(decrement, 1000);
    };
    function decrement () {
        countdownTime--;
        $("#timer").html("<h3>" + countdownTime + "</h3>");
    
        if (countdownTime === 0) {
            stop();
            submitInvis();
            countingAnswers();
        }
    };
    function stop() {
        clearInterval(countdown);
    }
    startTime();
});

//Check which radio button is selected and it's value
function countingAnswers () {
    var answerOne = $("input[name='q1']:checked").val();
    var answerTwo = $("input[name='q2']:checked").val();
    var answerThree = $("input[name='q3']:checked").val();
    var answerFour = $("input[name='q4']:checked").val();
    var answerFive = $("input[name='q5']:checked").val();
    var answerSix = $("input[name='q6']:checked").val();
    var answerSeven = $("input[name='q7']:checked").val();
    var answerEight = $("input[name='q8']:checked").val();
    var answerNine = $("input[name='q9']:checked").val();
    var answerTen = $("input[name='q10']:checked").val();

    //compare if the value is equal to the correct answer
    if (answerOne === "nickFury") {
        count++;
    };

    if (answerTwo == "gammaRadiation") {
        count++;
    };

    if (answerThree == "nebula") {
        count++;
    };

    if (answerFour == "newYork") {
        count++;
    };

    if (answerFive == "scarletWitch") {
        count++;
    };

    if (answerSix == "hankPym") {
        count++;
    };

    if (answerSeven == "magneto") {
        count++;
    };

    if (answerEight == "sniper") {
        count++;
    };

    if (answerNine == "cerebro") {
        count++;
    };

    if (answerTen == "sakaar") {
        count++;
    };
    var wrongCount = 10 - count;
    //Publish the correct and incorrect answer count
    $("#incorrectAnswers").html("<h3>" + wrongCount + "</h3>");
$("#correctAnswer").html("<h3>" + count + "</h3>");
};

//End counting on clicking the submit button and run count and masking of previous form
$("#submitButton").on("click", function() {
countingAnswers();
submitInvis();

});
