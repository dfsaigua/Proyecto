$(document).ready(function()
{
	$.ajax({
		type: "GET",
		url: "data/eventos.xml",
	    contentType: "text/xml",
	    success: function(xml){

	    	$(xml).find('eventos').each(function(){
	          var sAutor = $(this).find('autor').text();
	          var sTexto = $(this).find('texto').text();
	          $("<div></div>").attr('class','well').attr('autor',sAutor).html(sTexto).appendTo("#quotes");
	        })
	    }
	  })
})