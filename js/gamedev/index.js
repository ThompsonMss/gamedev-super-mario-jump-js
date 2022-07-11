import { executarAnimacoesBotoes } from "./animacoesBotoes.js";

const displayGamedev = document.querySelector('.display-gamedev');
const buttonUp = document.querySelector(`#btn-up`);
const buttonDown = document.querySelector(`#btn-down`);
const buttonLeft = document.querySelector(`#btn-left`);
const buttonRight = document.querySelector(`#btn-right`);
const buttonA = document.querySelector(`#btn-a`);
const buttonB = document.querySelector(`#btn-b`);

// Inicia as animações nos botões.
executarAnimacoesBotoes(
    buttonUp,
    buttonDown,
    buttonLeft,
    buttonRight,
    buttonA,
    buttonB
);

// Cria uma instância de som.
function playSound (diretorioDoSom = '') {
    return new Audio(diretorioDoSom);
}

function setEventoOnClickBotao (botao, callback = () => null) {
    botao.onclick = callback;
}

// Criando a interface de botões do gamedev.
const interfaceButtons = {
    buttonUp: {
        setOnClick: (callback = () => null) => setEventoOnClickBotao(buttonUp, callback)
    },
    buttonDown: {
        setOnClick: (callback = () => null) => setEventoOnClickBotao(buttonDown, callback)
    },
    buttonLeft: {
        setOnClick: (callback = () => null) => setEventoOnClickBotao(buttonLeft, callback)
    },
    buttonRight: {
        setOnClick: (callback = () => null) => setEventoOnClickBotao(buttonRight, callback)
    },
    buttonA: {
        setOnClick: (callback = () => null) => setEventoOnClickBotao(buttonA, callback)
    },
    buttonB: {
        setOnClick: (callback = () => null) => setEventoOnClickBotao(buttonB, callback)
    },
}

function carregaJogo (html) {
    displayGamedev.innerHTML = html;
}

export function carregamentoTela () {
    const textoCarregamento = document.querySelector('#texto-carregamento');

    const loop = setInterval(() => {

        if (textoCarregamento.innerText == 'CARREGANDO JOGO') {
            textoCarregamento.innerText = 'CARREGANDO JOGO.'
            return;
        }

        if (textoCarregamento.innerText == 'CARREGANDO JOGO.') {
            textoCarregamento.innerText = 'CARREGANDO JOGO..'
            return;
        }

        if (textoCarregamento.innerText == 'CARREGANDO JOGO..') {
            textoCarregamento.innerText = 'CARREGANDO JOGO...'
            return;
        }

        if (textoCarregamento.innerText == 'CARREGANDO JOGO...') {
            textoCarregamento.innerText = 'CARREGANDO JOGO'
            return;
        }
    }, 500);

    return loop;
}

export const gamedev = {
    playSound,
    carregaJogo,
    interfaceButtons
};