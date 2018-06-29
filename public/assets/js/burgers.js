$(function () {

    $(".burger-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log('burger button clicked')
      var newBurger = {
        name: $("#burger").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new newBurger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(function () {
      console.log("changed devour to ", true);
      location.reload();
    });
  });
  
});