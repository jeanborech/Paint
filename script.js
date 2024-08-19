const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const inputColor = document.querySelector('.input_color');
const ferramentas = document.querySelectorAll('.ferramenta_botao');
const tamanhoBotao = document.querySelector('tamanho_botao');
const ferramentaLimpar = document.querySelector('.ferramenta_limpar');

let tamanhoPincel = 50;

let pintura = false;

let ferramentaAtiva = "brush";

ctx.fillStyle = '#000';

inputColor.addEventListener('change', ({target}) => {
    ctx.fillStyle = target.value;

});

canvas.addEventListener("mousedown", ({clientX, clientY}) => {
    pintura = true;
    if (ferramentaAtiva === "brush") {
        desenhar(clientX, clientY);
    }
});

canvas.addEventListener("mousemove", ({clientX, clientY}) => {
    if(pintura) {
        if (ferramentaAtiva === "brush") {
            desenhar(clientX, clientY);
        }
    }
 });
 canvas.addEventListener("mouseup", ({clientX, clientY}) => {
    pintura = false;
 });

 //função de desenhar
const desenhar = (x, y) => {
  ctx.beginPath();
  ctx.arc(
     x - canvas.offsetLeft,
     y - canvas.offsetTop,
     tamanhoPincel / 2,
     0 , 2 * Math.PI);
ctx.fill();

    
}

//função para apagar
const apagar = (x, y) => {
    ctx.globalCompositeOperation = 'destination-out';
    
    ctx.beginPath();
    ctx.arc(
       x - canvas.offsetLeft,
       y - canvas.offsetTop,
       tamanhoPincel / 2,
       0 , 2 * Math.PI
    );
  ctx.fill();
    
  };

  ferramentas.forEach((ferramenta) => {
    ferramenta.addEventListener('click', () => {
        alert(123);
    })
      

  } );


