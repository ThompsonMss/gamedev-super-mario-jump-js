import { gamedev, carregamentoTela } from './gamedev/index.js';
import { executarMario } from './jogos/supermario/index.js';

const loopTextoCarregamento = carregamentoTela();

setTimeout(() => {
    clearInterval(loopTextoCarregamento);
    executarMario(gamedev);
}, 4000);