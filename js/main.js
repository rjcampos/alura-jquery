var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
$("#numero-palavras").text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
	var texto = $(".campo-digitacao").val();
	var qtdPalavras = texto.split(/\S+/).length - 1;
	$("#contador-palavras").text(qtdPalavras);
	$("#contador-caracteres").text(texto.length);
});

var tempoRestante = $("#tempo-restante").text();
campo.one("focus", function(){
	var cronometroId = setInterval(function(){
		tempoRestante--;
		$("#tempo-restante").text(tempoRestante);
		if(tempoRestante <= 0){
			clearInterval(cronometroId);
			$(".campo-digitacao").attr("disabled", true);
		}
	},1000);
});