
// function Carrossel() {
//     const [Carrossel, setCarrossel] = useState(imagem1)

//     const ImagensDireito = () => {
//         if (Carrossel === imagem1){
//             setCarrossel(imagem2)
//         }
//         else if (Carrossel === imagem2){
//             setCarrossel(imagem3)
//         }
//         else {
//             setCarrossel(imagem1)
//         }
//     }
//     const imagensEsquerdo = () => {
//         if (Carrossel === imagem3){
//                 setCarrossel(imagem2)
//         }
//         else if(Carrossel === imagem2){
//                 setCarrossel(imagem1)
//         }

//                 else {
//                 setCarrossel(imagem3)
//          }
//     }

let ImagemI = 1;
MostrarImagem(ImagemI);


function ImagemX(n) {
  MostrarImagem(ImagemI += n);
}


function ImagemAtual(n) {
  MostrarImagem(ImagemI = n);
}

function MostrarImagem(n) {
  let i;
  let Imagens = document.getElementsByClassName("Carrossel");
  let Bolinhas = document.getElementsByClassName("bolinha");
  if (n > Imagens.length) {ImagemI = 1}
  if (n < 1) {ImagemI = Imagens.length}
  for (i = 0; i < Imagens.length; i++) {
    Imagens[i].style.display = "none";
  }
  for (i = 0; i < Bolinhas.length; i++) {
    Bolinhas[i].className = Bolinhas[i].className.replace(" active", "");
  }
  Imagens[ImagemI-1].style.display = "block";
  Bolinhas[ImagemI-1].className += " active";
} 


