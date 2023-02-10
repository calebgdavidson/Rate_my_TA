$(document).ready( function() {
    var templateSource = $("#details-template").html();
    var template = Handlebars.compile(templateSource);
      $('#submitButton').click(function(){
          $("#detailsBox").html(template({"nameValue":$('#nameInput').val(), "emailLogin":$('#emailInput').val()}));
      });
    });
    