$(function() {
    $(".devour-burger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var newBurger = $(this).data("devour");
  
      var newBurgerState = {
        devoured: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed Burger to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newMenuItem
       = {
        name: $("#newBurger").val(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newMenuItem

      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });