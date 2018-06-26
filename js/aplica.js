function buscar(){
	var texto = document.getElementById('texto').value;
	if(texto.length > 0){

		var deportes = $('.encontrar')

		for(deporte of deportes){
			if (deporte.textContent.toLowerCase().search(texto) != -1){
				$(deporte).parent().attr('class','col-lg-3 col-md-4 col-sm-6 col-xs-12 mostrar')
			} else{
					$(deporte).parent().attr('class','ocultar')
			}
	
		}

	} else {
		var deportes = $('.encontrar')
		for(deporte of deportes){
			$(deporte).parent().attr('class','col-lg-3 col-md-4 col-sm-6 col-xs-12 mostrar')
		}

	}

}


$(document).ready(function()
{
	$('#buscar').on('click',buscar)
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