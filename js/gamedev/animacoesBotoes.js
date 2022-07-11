export function executarAnimacoesBotoes (
    buttonUp,
    buttonDown,
    buttonLeft,
    buttonRight,
    buttonA,
    buttonB
) {

    const stylesPressed = '3px solid rgba(0, 0, 0, 0.71)';

    const buttonsStylesEqual = [
        buttonRight,
        buttonLeft,
        buttonA,
        buttonB
    ];

    buttonsStylesEqual.forEach(button => {
        button.onmousedown = function () {
            button.style.borderBottom = 'none';
            button.style.borderTop = stylesPressed;
        }

        button.onmouseup = function () {
            button.style.borderBottom = stylesPressed;
            button.style.borderTop = 'none';
        }
    });

    buttonUp.onmousedown = function () {
        buttonUp.style.borderTop = stylesPressed;
    }

    buttonUp.onmouseup = function () {
        buttonUp.style.borderTop = 'none';
    }

    buttonDown.onmousedown = function () {
        buttonDown.style.borderBottom = 'none';
    }

    buttonDown.onmouseup = function () {
        buttonDown.style.borderBottom = stylesPressed;
    }
}