function manipularTexto() {
  // Obtém o texto digitado pelo usuário
  let textoOriginal = document.getElementById('texto').value;

  // Converte para letras maiúsculas
  let textoMaiusculo = textoOriginal.toUpperCase();

  // Conta o número de ocorrências de uma letra específica
  let contarOcorrencias = (texto, letra) => texto.split(letra).length - 1;
  let quantidadeB = contarOcorrencias(textoMaiusculo, 'B' );

  // Extrai uma substring
  //float totalAs = quantidadeA;
  let substring = textoOriginal.substring(0, 5);

  // Concatena strings e adiciona um espaço em branco
  //let resultado = "Texto em maiúsculas: " + textoMaiusculo + "<br>" + " A letra 'a' aparece " + quantidadeA + "<br>" + " vezes. Substring: " + substring;

  // Exibe o resultado
  document.getElementById('resultado').textContent = "Texto original: " + textoOriginal;
  document.getElementById('resultado1').textContent = "Texto em maiúsculas: " + textoMaiusculo;
  document.getElementById('resultado2').textContent = "A letra 'b' aparece: " + quantidadeB;
  document.getElementById('resultado3').textContent = "O texto com maximo de 5 caracteres: " + substring;
  //document.getElementById('resultado3').textContent = "O e tirado do texto a quantidade de 'a': " + substring;
  //document.getElementById('resultado').textContent = resultado;
}