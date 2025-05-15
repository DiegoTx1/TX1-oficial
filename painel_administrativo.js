
function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  document.getElementById('relogio').textContent = horas + ':' + minutos + ':' + segundos;
}
setInterval(atualizarRelogio, 1000);
window.onload = atualizarRelogio;

let banca = 100.00;
function registrarEntrada(tipo) {
  const resultado = Math.random() > 0.5 ? 'WIN' : 'LOSS';
  const lucro = resultado === 'WIN' ? 8.30 : -10.00;
  banca += lucro;
  document.getElementById('banca').textContent = banca.toFixed(2);
  document.getElementById('resultado').innerHTML = `Entrada: <strong>${tipo}</strong> - Resultado: <strong>${resultado}</strong> - Lucro: R$ ${lucro.toFixed(2)}`;
}
