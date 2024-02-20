// Função para gerar a tabuada
function gerarTabuada() {
  // Obtém o número digitado pelo usuário
  var numeroDigitado = document.getElementById("numero").value;

  // Limpa o conteúdo anterior
  document.getElementById("tabuadaResultado").innerHTML = "";

  // Exibe o número digitado na página
  document.getElementById("numeroDigitado").innerText = numeroDigitado;

  // Gera a tabuada e exibe na página
  for (var i = 1; i <= 10; i++) {
    var resultado = numeroDigitado * i;

    // Cria um item de lista para exibir cada linha da tabuada
    var listItem = document.createElement("li");
    listItem.innerText = numeroDigitado + " x " + i + " = " + resultado;

    // Adiciona o item de lista à lista de resultados
    document.getElementById("tabuadaResultado").appendChild(listItem);
  }
}
