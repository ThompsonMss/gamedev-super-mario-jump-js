export function fazerMarioPular (executarSom, controleMario) {

    executarSom();

    controleMario.classList.add('supermario-pular');
    setTimeout(() => controleMario.classList.remove('supermario-pular'), 500)

}