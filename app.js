alert('Boas vindas ao jogo do Número Secreto!');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 0 e ${numeroMaximo}:`);
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;


    } else {
        alert(`Que pena! Você errou o número secreto.`);

        if (chute < numeroSecreto) {
            alert(`Dica: O número secreto é maior que ${chute}.`);
        } else {
            alert(`Dica: O número secreto é menor que ${chute}.`);
        }
        tentativas++;
        
    }
}
let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`É isso aí! Você acertou o número secreto ${numeroSecreto}, com ${tentativas} ${palavrasTentativas}.`);
