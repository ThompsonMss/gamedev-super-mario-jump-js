export function reiniciarJogo (
    controlePontuacao,
    controleCano,
    controleChao,
    controleChaoContinuo,
    controleNuvem,
    controleMario,
    controleGameover,
    iniciarJogo = () => null
) {

    const valorFill = ''.padStart(8, '0');
    controlePontuacao.innerText = valorFill;
    controlePontuacao.style.color = 'white';

    controleCano.removeAttribute('style');
    controleChao.removeAttribute('style');
    controleChaoContinuo.removeAttribute('style');
    controleNuvem.removeAttribute('style');
    controleMario.removeAttribute('style');

    controleMario.src = '../../../assets/images/jogos/supermario/mario.gif';

    controleNuvem.style.animation = 'supermario-nuvens-animation 20s infinite linear';

    controleGameover.style.display = 'none';

    iniciarJogo();

}