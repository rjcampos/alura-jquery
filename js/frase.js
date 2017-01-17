$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
	$.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data){
	var index = Math.floor(Math.random() * data.length);
	$(".frase").text(data[index].texto);
	atualizaTamanhoFrase();
	atualizaTempo(data[index].tempo);
}