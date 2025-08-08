const prompt = require("prompt-sync")();
const pesoKG = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo por dia (gr): "));
const pesoGR = pesoKG * 1000;
const duracao = Math.floor(pesoGR / consumo);
const sobra = pesoGR % consumo;
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gr`);
