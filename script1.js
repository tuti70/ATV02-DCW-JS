function informacao() {
/*let elementos = [2, 3, 4];

  let elementosIn = "";
  let elementosOf = "";

  // Construindo a string para os elementos com índice
  for (let indice in elementos) {
    elementosIn += `<p> in: ${elementos[indice]}</p>`;
  }

  // Construindo a string para os elementos em si
  for (let elemento of elementos) {
    elementosOf += `<p> of: ${elemento}</p>`;
  }

  // Atribuindo os resultados aos elementos HTML
  document.getElementById('resultadoIn').innerHTML = elementosIn;
  document.getElementById('resultadoOf').innerHTML = elementosOf;
  */
    let elementos = ['Água', 'Fogo', 'Ar', 'Terra'];
    let resultadoIn = "";
    let resultadoOf = "";
  
    // Usando for...in (iterando sobre os índices)
    for (let indice in elementos) {
      resultadoIn += `<p>Índice: ${indice} - Valor: ${elementos[indice]}</p>`;
    }
  
    // Usando for...of (iterando sobre os valores)
    for (let elemento of elementos) {
      resultadoOf += `<p>Valor: ${elemento}</p>`;
    }
  
    // Atribuindo os resultados aos elementos HTML
    document.getElementById('resultadoIn').innerHTML = resultadoIn;
    document.getElementById('resultadoOf').innerHTML = resultadoOf;

}