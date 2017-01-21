/* Variáveis globais */
var tempoInicial = $("#tempo-restante").text();
var campo = $(".campo-digitacao");

$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	$("#botao-reiniciar").click(reiniciaJogo);
	//desabilitando o botão ao carregar a página
	$("#botao-reiniciar").toggleClass("botao-desativado");
	atualizaPlacar();
	$("#usuarios").selectize({
		create: true,
		sortField: 'text'
	});
});

function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;
	$("#numero-palavras").text(numPalavras);
}

function atualizaTempo(tempo){
	console.log(tempo);
	$("#tempo-restante").text(tempo);
	tempoInicial = tempo;
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
	campo.one("focus", function(){
		var tempoRestante = tempoInicial
		var cronometroId = setInterval(function(){
			tempoRestante--;
			$("#tempo-restante").text(tempoRestante);
			if(tempoRestante <= 0){
				clearInterval(cronometroId);
				finalizaJogo();	
			}
		},1000);
	});
}

function inicializaMarcadores(){
	campo.on("input", function(){
		var frase = $(".frase").text();
		var digitado = campo.val();
		if(frase.startsWith(digitado)){
			campo.removeClass("texto-errado");
			campo.addClass("texto-certo");
		}
		else{
			campo.removeClass("texto-certo");
			campo.addClass("texto-errado");
		}
	});
}

function finalizaJogo(){
	$(".campo-digitacao").attr("disabled", true);
	campo.toggleClass("campo-desativado");
	$("#botao-reiniciar").toggleClass("botao-desativado");
	inserePlacar();
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
	//Removendo bordas
	campo.removeClass("texto-errado");
	campo.removeClass("texto-certo");
}