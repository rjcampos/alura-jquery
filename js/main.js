/* Variáveis globais */
var tempoInicial = $("#tempo-restante").text();
var campo = $(".campo-digitacao");

$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$("#botao-reiniciar").click(reiniciaJogo);
	//desabilitando o botão ao carregar a página
	$("#botao-reiniciar").toggleClass("botao-desativado");
});

function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;
	$("#numero-palavras").text(numPalavras);
}

function inicializaContadores(){
	campo.on("input", function(){
		var texto = $(".campo-digitacao").val();
		var qtdPalavras = texto.split(/\S+/).length - 1;
		$("#contador-palavras").text(qtdPalavras);
		$("#contador-caracteres").text(texto.length);
	});
}

function inicializaCronometro(){
	var tempoRestante = tempoInicial
	campo.one("focus", function(){
		var cronometroId = setInterval(function(){
			tempoRestante--;
			$("#tempo-restante").text(tempoRestante);
			if(tempoRestante <= 0){
				clearInterval(cronometroId);
				$(".campo-digitacao").attr("disabled", true);
				$("#botao-reiniciar").attr("disabled", false);
				campo.toggleClass("campo-desativado");
				$("#botao-reiniciar").toggleClass("botao-desativado");
			}
		},1000);
	});
}

function reiniciaJogo(){
	$(".campo-digitacao").attr("disabled", false);
	$(".campo-digitacao").val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-restante").text(tempoInicial);
	campo.toggleClass("campo-desativado");
	//desabilitando o botão após ele ser clicado
	$("#botao-reiniciar").toggleClass("botao-desativado");
	inicializaCronometro();
}

function setButtonView(tempo){
	if(tempo > 0){
		$("#botao-reiniciar").addClass("botao-desativado");
	}
	else{
		$("#botao-reiniciar").removeClass("botao-desativado");
	}
}