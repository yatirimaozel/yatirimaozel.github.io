$(document).ready(function () {
  "use strict";

  var answers = {};

  $(".test-step .next-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".test-step").fadeOut(500);
    setTimeout(
      function () {
        $(this).parents(".test-step").next().addClass("active");
      }.bind(this),
      800
    );
  });

  $(".test-step label").on("click", function (e) {
    setTimeout(
      function () {
        $(this).parents(".test-step").fadeOut(500);
        setTimeout(
          function () {
            $(this).parents(".test-step").next().addClass("active");
          }.bind(this),
          800
        );
      }.bind(this),
      500
    );
  });

  $(".test-step .prev-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".test-step").prev().addClass("active");
    $(this).parents(".test-step").removeClass("active");
  });

  $("#start-menu").one("click", function (e) {
    e.preventDefault();
    $(this).parents(".test-step").fadeOut(500);
    setTimeout(
      function () {
        $(this).parents(".test-step").next().addClass("active");
      }.bind(this),
      800
    );
  });

  function handleAnswerClick() {
    var question = $(this)
      .closest(".quiz__questions")
      .find(".q-uestion")
      .text()
      .trim();
    var answer = $(this).find(".control-label .answer__title").text().trim();
    answers[question] = answer;

    $("#comment").val(JSON.stringify(answers));

    setTimeout(
      function () {
        $(this).parents(".test-step").fadeOut(500);
        var nextStep = $(this).parents(".test-step").next(".test-step");
        if (nextStep.length) {
          setTimeout(
            function () {
              nextStep.addClass("active");
            }.bind(this),
            800
          );
        }
      }.bind(this),
      500
    );
  }

  $(".test-step .answer-btn").on("click", handleAnswerClick);

  $(".test-step .prev-btn").on("click", function (e) {
    e.preventDefault();
    var prevStep = $(this).parents(".test-step").prev(".test-step");
    if (prevStep.length) {
      $(this)
        .parents(".test-step")
        .fadeOut(500, function () {
          prevStep.addClass("active");
        });
    }
  });
});
