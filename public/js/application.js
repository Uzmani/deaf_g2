$(document).ready(function() {
  $('form').on('submit', function(event){
    event.preventDefault();

    var input = $(this).serialize();
    console.log(input);
    $.ajax({
      url: this.action,
      type: this.method,
      data: input
    }).done(function(server_data){
     console.log(server_data); 
     $('#grandma_response').html(server_data);
    });


  });
});
