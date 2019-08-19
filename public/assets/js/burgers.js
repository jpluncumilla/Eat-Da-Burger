// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var curStatus = $(this).data("status");
    
    if(curStatus === 0){
      curStatus = true;
    }
    var newDevourStatus = {
      devoured: curStatus
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourStatus
      }).then(
      function() {
        console.log("changed status to", newDevourStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
console.log( $("#name").val().trim());
    var newBurger = {
      name: $("#name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/new", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
