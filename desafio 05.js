//Lembram que nos últimos vídeos, precisávamos aumentar a dificuldade do jogo e alterar o número secreto de 1 a 100?
// Se quiséssemos alterar para 1 a 1.000 ou 1 a qualquer número que você imaginar, precisávamos mudar a linha 2, onde temos let numerosecreto.
    let numeroSecreto = parseInt(Math.random() * 100 + 1);

    // E também a linha 9, onde definimos o prompt() para informar à pessoa usuária qual era o número máximo.
    while (chute != numeroSecreto) {
        chute = prompt('Escolha um número entre 1 e 100');

        // código omitido…
    }
// Agora, queremos que isso seja dinâmico!


