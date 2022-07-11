let somAtualMarioPular = null;
let somAtualPremiacao = null;
let somAtualGameOver = null;

function playMarioPular (play = () => null) {

    if (somAtualMarioPular !== null) {
        somAtualMarioPular.pause();
    }

    somAtualMarioPular = play('../../../assets/sounds/jogos/supermario/jumpsmall.wav');
}

function playPremiacao (play = () => null) {

    if (somAtualPremiacao !== null) {
        somAtualPremiacao.pause();
    }

    somAtualPremiacao = play('../../../assets/sounds/jogos/supermario/newlevel.wav');
}

function playGameover (play = () => null) {

    if (somAtualMarioPular !== null) {
        somAtualMarioPular.pause();
    }

    if (somAtualPremiacao !== null) {
        somAtualPremiacao.pause();
    }

    if (somAtualGameOver !== null) {
        somAtualGameOver.pause();
    }

    somAtualGameOver = play('../../../assets/sounds/jogos/supermario/gameover.wav');
}

export function controladorSom (driverPlaySound) {
    return {
        playMarioPular: () => playMarioPular(driverPlaySound),
        playPremiacao: () => playPremiacao(driverPlaySound),
        playGameover: () => playGameover(driverPlaySound)
    }
}