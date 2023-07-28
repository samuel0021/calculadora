
const calculadora = document.querySelector('.calculadora');
const teclado = calculadora.querySelector('.calculadora_teclado');

const teclas = calculadora.querySelectorAll('.tecla');

const display = calculadora.querySelector('.calculadora_display_label');

teclado.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
      console.log(e);
    }
   })