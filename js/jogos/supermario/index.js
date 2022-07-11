import { controladorSom } from './controladorSom.js';
import { fazerMarioPular } from './fazerMarioPular.js';
import { startJogo } from './startJogo.js';
import { reiniciarJogo } from './reiniciarJogo.js';
import { getHTML } from './getHTML.js';

export function executarMario (gamedev = {}) {

    gamedev.carregaJogo(getHTML());

    const controleMario = document.querySelector('.supermario-mario');
    const controleCano = document.querySelector('.supermario-cano');
    const controleNuvens = document.querySelector('.supermario-nuvens');
    const controlePontuacao = document.querySelector('#supermario-pontuacao');
    const controleRecorde = document.querySelector('#supermario-recorde');
    const controleGameover = document.querySelector('.supermario-gameover');
    const controleChao = document.querySelector('.supermario-chao');
    const controleChaoContinuo = document.querySelector('.supermario-chao-continuo');

    /**
     * Controladores do jogo
     */

    function executarSom (dirSom) {
        const music = gamedev.playSound(dirSom);

        music.play();
        return music;
    }

    const controlarDoSom = controladorSom(executarSom);

    function startJogoMario () {
        startJogo(
            controleChao,
            controleChaoContinuo,
            controleCano,
            controleMario,
            controleNuvens,
            controlarDoSom.playGameover,
            controleGameover,
            controlePontuacao,
            controlarDoSom.playPremiacao,
            controleRecorde
        );
    }

    function inserirRecorde () {
        let valorPontuacaoRecorde = localStorage.getItem('supermario-pontuacao-recorde');

        if (!!valorPontuacaoRecorde) {
            controleRecorde.innerText = localStorage.getItem('supermario-pontuacao-recorde');
        } else {
            controleRecorde.innerText = ''.padStart(8, '0');
        }
    }

    /**
     * Atribuindo as ações aos botões.
     */

    gamedev.interfaceButtons.buttonUp.setOnClick(
        () => localStorage.getItem('faseiniciada-supermario') !== '' ? fazerMarioPular(controlarDoSom.playMarioPular, controleMario) : null
    );

    gamedev.interfaceButtons.buttonA.setOnClick(
        () => localStorage.getItem('faseiniciada-supermario') !== '' ? fazerMarioPular(controlarDoSom.playMarioPular, controleMario) : null
    );

    gamedev.interfaceButtons.buttonB.setOnClick(
        () => localStorage.getItem('faseiniciada-supermario') === '' ? reiniciarJogo(
            controlePontuacao,
            controleCano,
            controleChao,
            controleChaoContinuo,
            controleNuvens,
            controleMario,
            controleGameover,
            startJogoMario
        ) : null
    );

    inserirRecorde();
    startJogoMario();
}