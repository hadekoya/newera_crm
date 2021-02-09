// Shorthand for $( document ).ready()
$(function () {
  $(".list-group-item").click(function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");

    let cake_category = $(this).attr("value");
    console.log(cake_category);

    if (cake_category == "view all") {
      $(".card").parent().css("display", "block");
    } else {
      $(".card").parent().css("display", "none");
      filter = ".card[category='" + cake_category + "']";
      $(filter).parent().css("display", "block");
    }
  });
});
