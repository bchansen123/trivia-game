
$("#startButton").on("click", function() {
    $(".invisible").removeClass("invisible");
    $(".startingForm").addClass("invisible");
});

var rightAnswers = ["Nick Fury","Gamma Radiation","Nebula","New York","Scarlet Witch","Hank Pym","Magneto","A Sniper","Cerebro","Sakaar"]

$("#submitButton").on("click", function() {
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
var count = 0;

if (answerOne = rightAnswers[0]) {
    count++;
};

if (answerTwo = rightAnswers[1]) {
    count++;
};

if (answerThree = rightAnswers[2]) {
    count++;
};

if (answerFour = rightAnswers[3]) {
    count++;
};

if (answerFive = rightAnswers[4]) {
    count++;
};

if (answerSix = rightAnswers[5]) {
    count++;
};

if (answerSeven = rightAnswers[6]) {
    count++;
};

if (answerEight = rightAnswers[7]) {
    count++;
};

if (answerNine = rightAnswers[8]) {
    count++;
};

if (answerTen = rightAnswers[9]) {
    count++;
};
console.log(count);
});