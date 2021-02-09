// Shorthand for $( document ).ready()
$(function () {
  $(".list-group-item").click(function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");

    let cakecategory = $(this).attr("value");
    console.log(cakecategory);

    if (cakecategory == "view all") {
      $(".card").parent().css("display", "block");
    } else {
      $(".card").parent().css("display", "none");
      filter = ".card[category='" + cakecategory + "']";
      $(filter).parent().css("display", "block");
    }
  });
});
