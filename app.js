alert('Boas vindas ao jogo do Número Secreto!');

let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 0 e 10:');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`É isso aí! Você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativas.`);
    } else {
        alert(`Que pena! Você errou o número secreto.`);

        if (chute < numeroSecreto) {
            alert('Dica: O número secreto é maior que o seu chute.');
        } else {
            alert('Dica: O número secreto é menor que o seu chute.');
        }
        tentativas++;
        
    }
}