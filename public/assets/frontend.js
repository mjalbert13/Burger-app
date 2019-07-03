$(function() {
    $(".devour-burger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var newdDevour = $(this).data("devour");
  
      var newBurgerState = {
        devoured: newdDevour
      };
  
      // Send the PUT request.
    //   $.ajax("/api/burgers/:id" + id,{
    //     type: "PUT",
    //     data: newBurgerState
    //   }).then(
    //     function() {
    //       console.log("changed Burger to", newdDevour);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
     });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newMenuItem
       = {
        name: $("#newBurger").val(),
      };
  
      // Send the POST request.
      // $.ajax("/api/burgers/create", {
      //   type: "POST",
      //   data: newMenuItem.name

      // }).then(
      //   function() {
      //     console.log("created new burger" +newMenuItem.name);
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
      // );
    });
  
  });