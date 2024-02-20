// Função que é chamada quando o botão é clicado
function calcularSalario() {
  // Obtendo os valores do nome e salário do formulário
  var nome = document.getElementById("nome").value;
  var salario = parseFloat(document.getElementById("salario").value);

  // Calculando o salário líquido (por exemplo, descontando 20%)
  var salarioLiquido = salario * 0.8;

  // Exibindo a mensagem com o resultado
  var mensagem =
    "Olá, " + nome + "! Seu salário líquido é: R$ " + salarioLiquido.toFixed(2);
  document.getElementById("resultado").innerText = mensagem;
}
