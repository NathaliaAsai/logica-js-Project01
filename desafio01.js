//01 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

//02 - Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

//03 - Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//04 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//05 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//06 - Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos.');

//07 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos.';
alert(mensagemDeErro);

//08 - Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nome = prompt('Qual é o seu nome?');

//09 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt(`qual é a sua idade?`);

//10 Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >=18) {
    alert (`${nome}, sua idade é ${idade}$, você já pode tirar sua habilitação! `);
} else {
    alert (`${nome}$, sua idade é ${idade}$, você ainda não pode tirar sua habilitacão :( `);
}

