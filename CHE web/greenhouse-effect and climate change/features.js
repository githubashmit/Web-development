$(document).ready(function() {

    //for /10-things-energy
    $("#slide1").show();
    var currentSlide = 1;
    var numSlides = $(".slide").length;
    var slideNumber = $("#slideNumber");
    slideNumber.text("1 of " + numSlides);

    $("#leftArrow").click(function() {
        $("#slide" + currentSlide).hide();
        currentSlide--;
        if (currentSlide < 1) {
            currentSlide = numSlides;
        }

        $("#slide" + currentSlide).show();
        slideNumber.text("" + currentSlide + " of " + numSlides);
    });

    $("#rightArrow").click(function() {
        $("#slide" + currentSlide).hide();
        currentSlide++;
        if (currentSlide > numSlides) {
            currentSlide = 1;
        }

        $("#slide" + currentSlide).show();
        slideNumber.text("" + currentSlide + " of " + numSlides);
    });
    //


});

$(document).on('submit', '.feedback', function(e) { // note the e, thats the event 
    e.preventDefault(); // this stops the default event of the form
    $.post("/magic/feedback.php", $(this).serialize()).done(function(data) {
        $(".feedback").hide();
        $("#feedbackConfirmation").show();
    });
});