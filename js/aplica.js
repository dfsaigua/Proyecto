$(document).ready(function()
{
	$.ajax({
		type: "GET",
		url: "data/eventos.xml",
	    contentType: "text/xml",
	    success: function(xml){

	    	$(xml).find('evento').each(function(){
	          var sTitulo = $(this).find('titulo').text();
	          var sTexto = $(this).find('texto').text();
	          $("<h3></h3>").html(sTitulo).appendTo("#inf-event");
	          $("<p></p>").html(sTexto).appendTo("#inf-event");

	        })
	    }
	  })
})