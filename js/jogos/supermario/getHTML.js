export function getHTML () {
    return `
        <div class="supermario-display">
            <div class="supermario-container-jogo">
                <div class="supermario-container-pontuacao">

                    <div class="supermario-pontuacao-direita">
                        <h1>Seu recorde</h1>
                        <p id="supermario-recorde">000000000</p>
                    </div>

                    <div class="supermario-pontuacao-esquerda">
                        <h1>Score</h1>
                        <p id="supermario-pontuacao">000000000</p>
                    </div>
                </div>

                <img src="./assets/images/jogos/supermario/clouds.png" class="supermario-nuvens">
                <img src="./assets/images/jogos/supermario/mario.gif" class="supermario-mario">
                <img src="./assets/images/jogos/supermario/pipe.png" class="supermario-cano">

                <img class="supermario-chao" src="../assets/images/jogos/supermario/ground.png" alt="">
                <img class="supermario-chao-continuo" src="../assets/images/jogos/supermario/ground.png"
                    alt="">

                <div class="supermario-gameover">
                    <h1>Game Over</h1>

                    <div class="supermario-btn-resetar">
                        <i style="font-size: 20px; color: white; margin: 0px; padding: 0px;"
                            class="fa-solid fa-rotate-left"></i>
                        <span
                            style="color: white; margin: 0px; padding: 0px; margin-top: 5px; font-size: 14px;">Pressione
                            (B)</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}