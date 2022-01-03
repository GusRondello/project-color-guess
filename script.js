window.onload = function () {
  const corPrincipal = document.getElementById('rgb-color');
  const bola = document.querySelector('.ball');
  // obs: randomizar o valor das bolas primeiro para depois selecionar o valor correto

  function randomizeRGB() {
    const valorRGB = [0, 1, 2];
    for (let i = 0; i <= valorRGB.length - 1; i += 1) {
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

      const min = Math.ceil(0);
      const max = Math.floor(255);
      let valorGerado = Math.floor(Math.random() * (max - min + 1)) + min;
      valorRGB[i] = valorGerado;
    }
    corPrincipal.innerHTML += '(' + valorRGB + ')';
  }

  randomizeRGB();
};
