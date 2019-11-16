
const startButton =document.getElementById("startButton");


startButton.addEventListener("click", function() {
    $(".invisible").removeClass("invisible");
    $(".startingForm").addClass("invisible");
});
