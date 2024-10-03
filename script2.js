
function contador() {
  let i = 0;
  let numero = prompt('Insira um valor');
  let resultado = ''; // Variável para armazenar o resultado

  while (numero <= 10) {
    resultado += `<p> ${i}</p>`;
    i++;
    numero++;
  }

  document.getElementById('contador').innerHTML = resultado;
}