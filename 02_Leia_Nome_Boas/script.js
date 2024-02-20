// Função para exibir a mensagem de boas-vindas
function exibirMensagem() {
    // Obtém o valor do campo de entrada pelo ID
    var nome = document.getElementById("nome").value;

    // Verifica se o campo não está vazio
    if (nome.trim() !== "") {
        // Cria a mensagem de boas-vindas
        var mensagem = "Bem-vindo, " + nome + "!";

        // Exibe a mensagem em um alerta
        alert(mensagem);
    } else {
        // Se o campo estiver vazio, exibe uma mensagem de alerta
        alert("Por favor, digite seu nome.");
    }
}
