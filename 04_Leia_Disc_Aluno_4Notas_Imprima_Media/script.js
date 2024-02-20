// Função para calcular a média e exibir o resultado
function calcularMedia() {
  // Obter valores dos campos de notas
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);

  // Calcular a média
  var media = (nota1 + nota2 + nota3 + nota4) / 4;

  // Exibir o resultado na página
  var disciplina = document.getElementById("disciplina").value;
  var aluno = document.getElementById("aluno").value;
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML =
    "Média do aluno " +
    aluno +
    " na disciplina " +
    disciplina +
    ": " +
    media.toFixed(2);
}
