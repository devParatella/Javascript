// Função para realizar o cadastro e exibir os dados no console e em um alerta
function realizarCadastro() {
  // Captura dos valores dos campos do formulário
  const matricula = document.getElementById("matricula").value;
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const cpf = document.getElementById("cpf").value;
  const sexo = document.getElementById("sexo").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;

  // Exibição dos dados no console
  console.log("Matrícula:", matricula);
  console.log("Nome:", nome);
  console.log("Sobrenome:", sobrenome);
  console.log("CPF:", cpf);
  console.log("Sexo:", sexo);
  console.log("Data de Nascimento:", dataNascimento);
  console.log("Endereço:", endereco);
  console.log("Telefone:", telefone);

  // Exibição dos dados em um alerta
  alert(
    `Dados de Cadastro:\n\nMatrícula: ${matricula}\nNome: ${nome}\nSobrenome: ${sobrenome}\nCPF: ${cpf}\nSexo: ${sexo}\nData de Nascimento: ${dataNascimento}\nEndereço: ${endereco}\nTelefone: ${telefone}`
  );
}
