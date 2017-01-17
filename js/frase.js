$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

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

function buscaFrase(){
	$("#spinner").toggle();
	var idFrase = $("#frase-id").val();
	var objetoId = {id: idFrase};

	$.get("http://localhost:3000/frases", objetoId, trocaFrase)
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

function trocaFrase(data){
	$(".frase").text(data.texto);
	atualizaTamanhoFrase();
	atualizaTempo(data.tempo);
}