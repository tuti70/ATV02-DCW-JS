function adicionarPares() {
  // Obtém o valor digitado pelo usuário
  let quantidade = parseInt(document.getElementById('quantidade').value);

  // Valida a entrada do usuário
  if (quantidade < 2 || quantidade > 18) {
      alert("Digite um número entre 2 e 18.");
      return;
  }

  // Cria um vetor vazio
  let numerosPares = [];
  let i = 0;

  // Loop Do-While para adicionar números pares
  do {
      numerosPares.push(i + 2);
      i += 2;
  } while (i < quantidade * 2);

  // Exibe o resultado no console e em um elemento HTML
  console.log(numerosPares);
  document.getElementById('resultado').textContent = numerosPares.join(', ');
}