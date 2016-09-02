/**
 * 
 */

$(document).ready(function(){
	$("#formBusca").submit(function(e){
		e.preventDefault();
		$.get("/Servicos/nomes/"+$("#campoBusca").val()+"/", function(data,status){
			console.log("Status: "+status);
			console.log("data: " + data);
			$('#imagem').attr('src', data.imagem);
			$("#descricao").html(data.descricao);
			$("#nome").html("Nome: "+data.nome);
			$("#divRetornoBusca").show();
		});
	});
});

$("#limparBusca").click(function(){
	$("#divRetornoBusca").fadeOut(500);
	$("#campoBusca").val("");
});

function apagarRetorno(){
	$("#retorno").html("");
}