$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
	$("#spinner").toggle();
	$.get("http://localhost:3000/frases", trocaFraseAleatoria)
	.fail(function(){
		$("#erro").toggle();
		setTimeout(function(){
			$("#erro").toggle();
		}, 2000);
	})
	.always(function(){
		$("#spinner").toggle();
	});
}

function trocaFraseAleatoria(data){
	var index = Math.floor(Math.random() * data.length);
	$(".frase").text(data[index].texto);
	atualizaTamanhoFrase();
	atualizaTempo(data[index].tempo);
}