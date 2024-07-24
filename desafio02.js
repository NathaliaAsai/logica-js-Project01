//01 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
diaDaSemana = prompt (`Qual o dia da semana?`);
if (diaDaSemana = `sábado`) {
        alert('bom final de semana');
    } else if (diaDaSemana == `domingo`) {
            alert(`Bom final de semana`);
        } else {
            alert(`Boa semana`);
        }


//02 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt (`Digite um numero positivo ou negativo`);
if (numero > 0) {
    alert(`O número é positivo`);
} else {
    alert(`O número é negativo`);
}

//03 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
score = prompt(`Pontuação`);
if (score >=100) {
    alert (`Parabéns, você venceu!`);
} else {
    alert(`Tente novamente para ganhar.`);
}

//04 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 100;
alert(`O seu saldo é de R$${saldo}.`);

//05 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt(`qual o seu nome?`);
alert(`${nome} bem vindo ao nosso site! <3`);
