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