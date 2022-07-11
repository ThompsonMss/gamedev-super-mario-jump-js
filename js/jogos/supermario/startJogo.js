export function startJogo (
    controleChao,
    controleChaoContinuo,
    controleCano,
    controleMario,
    controleNuvens,
    playGameover,
    controleGameover,
    controlePontuacao,
    playPremiacao,
    controleRecorde
) {

    localStorage.setItem('nivel-jogo-supermario', 1);

    let loopFaseIniciada = setInterval(() => {

        incrementarPontuacao(
            controlePontuacao,
            playPremiacao
        );

        const chaoPosicao = controleChao.offsetLeft;
        const chaoContinuoPosicao = controleChaoContinuo.offsetLeft;

        const canoPosicao = controleCano.offsetLeft;
        const marioPosicao = +window.getComputedStyle(controleMario).bottom.replace('px', '');
        const nuvensPosicao = controleNuvens.offsetLeft;

        if (canoPosicao <= 70 && canoPosicao > 0 && marioPosicao < 88) {

            playGameover();

            controleCano.style.animation = 'none';
            controleCano.style.left = `${canoPosicao}px`;

            controleChao.style.animation = 'none';
            controleChao.style.left = `${chaoPosicao}px`;
            controleChaoContinuo.style.animation = 'none';
            controleChaoContinuo.style.left = `${chaoContinuoPosicao}px`;

            controleMario.style.animation = 'none';
            controleMario.style.bottom = `${marioPosicao}px`;

            controleMario.src = '../../../assets/images/jogos/supermario/game-over.png';
            controleMario.style.width = '40px';
            controleMario.style.marginLeft = '35px';

            controleNuvens.style.animation = 'none';
            controleNuvens.style.left = `${nuvensPosicao}px`;

            controleGameover.style.display = 'flex';

            loopFaseIniciada = localStorage.getItem('faseiniciada-supermario');

            clearInterval(loopFaseIniciada);
            localStorage.setItem('faseiniciada-supermario', '');

            salvandoPontuacaoRecorde(
                controlePontuacao,
                controleRecorde
            );
        }

    }, 10);

    localStorage.setItem('faseiniciada-supermario', loopFaseIniciada);
}

function incrementarPontuacao (
    controlePontuacao,
    playPremiacao
) {

    let NIVEL_DO_JOGO = localStorage.getItem('nivel-jogo-supermario');

    if (NIVEL_DO_JOGO < 1) {
        NIVEL_DO_JOGO = 1;
    }

    let valorPontuacao = parseFloat(controlePontuacao.innerText);

    if (valorPontuacao > (NIVEL_DO_JOGO * (1000 * NIVEL_DO_JOGO))) {

        NIVEL_DO_JOGO += 1;

        localStorage.setItem('nivel-jogo-supermario', NIVEL_DO_JOGO);

        playPremiacao();

        controlePontuacao.style.color = 'yellow';
        setTimeout(() => {
            controlePontuacao.style.color = 'white';
        }, 5000)

    }

    valorPontuacao += 1;
    valorPontuacao = `${valorPontuacao}`;

    const valorFill = valorPontuacao.padStart(8, '0');

    controlePontuacao.innerText = valorFill;
}

function salvandoPontuacaoRecorde (
    controlePontuacao,
    controleRecorde
) {

    let valorPontuacao = parseFloat(controlePontuacao.innerText);
    let valorPontuacaoRecorde = parseFloat(localStorage.getItem('supermario-pontuacao-recorde'));

    if (isNaN(valorPontuacaoRecorde) || valorPontuacao > valorPontuacaoRecorde) {
        controleRecorde.innerText = controlePontuacao.innerText;
        localStorage.setItem('supermario-pontuacao-recorde', controlePontuacao.innerText);
    }

}