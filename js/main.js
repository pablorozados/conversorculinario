// JavaScript code for the Conversor Culinário project

// Abas
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(this.dataset.tab).style.display = 'block';
    this.classList.add('active');
  });
});
// Ativa a primeira aba ao carregar
document.querySelector('.tab-btn').click();

// Conversão de Volume
const volumeFactors = {
  ml: 1,
  l: 1000,
  oz: 29.5735,
  cup: 240,
  tbsp: 15,
  tsp: 5,
  dl: 100,
  floz: 29.5735
};
function convertVolume() {
  const value = parseFloat(document.getElementById('volume-value').value);
  const from = document.getElementById('volume-from').value;
  const to = document.getElementById('volume-to').value;
  if (isNaN(value)) {
    document.getElementById('volume-result').innerText = 'Digite um valor válido!';
    return;
  }
  const ml = value * volumeFactors[from];
  const result = ml / volumeFactors[to];
  document.getElementById('volume-result').innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

// Conversão de Massa/Peso
const massaFactors = {
  g: 1,
  kg: 1000,
  lb: 453.592,
  oz: 28.3495
};
function convertMassa() {
  const value = parseFloat(document.getElementById('massa-value').value);
  const from = document.getElementById('massa-from').value;
  const to = document.getElementById('massa-to').value;
  if (isNaN(value)) {
    document.getElementById('massa-result').innerText = 'Digite um valor válido!';
    return;
  }
  const g = value * massaFactors[from];
  const result = g / massaFactors[to];
  document.getElementById('massa-result').innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

// Conversão de Temperatura
function convertTemp() {
  const value = parseFloat(document.getElementById('temp-value').value);
  const from = document.getElementById('temp-from').value;
  const to = document.getElementById('temp-to').value;
  if (isNaN(value)) {
    document.getElementById('temp-result').innerText = 'Digite um valor válido!';
    return;
  }
  let result = value;
  // Converter para Celsius
  if (from === 'f') result = (value - 32) * 5/9;
  else if (from === 'k') result = value - 273.15;
  // Converter de Celsius para destino
  if (to === 'f') result = result * 9/5 + 32;
  else if (to === 'k') result = result + 273.15;
  document.getElementById('temp-result').innerText = `${value}°${from.toUpperCase()} = ${result.toFixed(2)}°${to.toUpperCase()}`;
}

// Event listeners for conversion
document.addEventListener('DOMContentLoaded', () => {
    const volumeForm = document.getElementById('volume-form');
    const massForm = document.getElementById('mass-form');
    const tempForm = document.getElementById('temp-form');

    volumeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = parseFloat(volumeForm.elements['value'].value);
        const fromUnit = volumeForm.elements['fromUnit'].value;
        const toUnit = volumeForm.elements['toUnit'].value;
        const result = convertVolume(value, fromUnit, toUnit);
        document.getElementById('volume-result').innerText = result.toFixed(2);
    });

    massForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = parseFloat(massForm.elements['value'].value);
        const fromUnit = massForm.elements['fromUnit'].value;
        const toUnit = massForm.elements['toUnit'].value;
        const result = convertMass(value, fromUnit, toUnit);
        document.getElementById('mass-result').innerText = result.toFixed(2);
    });

    tempForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = parseFloat(tempForm.elements['value'].value);
        const fromUnit = tempForm.elements['fromUnit'].value;
        const toUnit = tempForm.elements['toUnit'].value;
        const result = convertTemperature(value, fromUnit, toUnit);
        document.getElementById('temp-result').innerText = result.toFixed(2);
    });
});