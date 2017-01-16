function inserePlacar(){
	var placar = $(".placar").find("tbody");
	var usuario = "Raimundo";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinha(usuario, numPalavras);
	linha.find(".botao-remover").click(removeLinha);
	placar.append(linha);

	$(".placar").slideDown(600);
	scrollPlacar();
}

function scrollPlacar(){
	var posicaoPlacar = $(".placar").offset().top;
	$("body").animate({
		scrollTop: posicaoPlacar + "px"
	}, 1000);
}

function novaLinha(usuario, numPalavras){
	var linha = $("<tr>");
	var nome = $("<td>").text(usuario);
	var pontuacao = $("<td>").text(numPalavras);

	var colunaRemove = $("<td>");
	var link = $("<a>").attr("href", "#").addClass("botao-remover");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	link.append(icone);
	colunaRemove.append(link);

	linha.append(nome);
	linha.append(pontuacao);
	linha.append(colunaRemove);
	return linha;
}

function removeLinha(event){
	event.preventDefault();
	var linha = $(this).parent().parent();
	linha.fadeOut(1000)
	setTimeout(function(){
		linha.remove();
	}, 1000);
}

$("#botao-placar").click(mostraPlacar);

function mostraPlacar(){
	$(".placar").stop().slideToggle(600);
}