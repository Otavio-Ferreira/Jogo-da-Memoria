const arrayCartas = [
  {
    nome: "livro",
    img: "imgs/01.png"
  },
  {
    nome: "chapeu",
    img: "imgs/02.png"
  },
  {
    nome: "olho",
    img: "imgs/03.png"
  },
  {
    nome: "urso",
    img: "imgs/04.png"
  },
  {
    nome: "zumbi",
    img: "imgs/05.png"
  },
  {
    nome: "bruxa",
    img: "imgs/06.png"
  },
  {
    nome: "espantalho",
    img: "../imgs/07.png"
  },
  {
    nome: "caixao",
    img: "../imgs/08.png"
  },
  {
    nome: "abobora",
    img: "imgs/09.png"
  },
  {
    nome: "livro",
    img: "imgs/01.png"
  },
  {
    nome: "chapeu",
    img: "imgs/02.png"
  },
  {
    nome: "olho",
    img: "imgs/03.png"
  },
  {
    nome: "urso",
    img: "imgs/04.png"
  },
  {
    nome: "zumbi",
    img: "imgs/05.png"
  },
  {
    nome: "bruxa",
    img: "imgs/06.png"
  },
  {
    nome: "espantalho",
    img: "imgs/07.png"
  },
  {
    nome: "caixao",
    img: "imgs/08.png"
  },
  {
    nome: "abobora",
    img: "imgs/09.png"
  }
]

arrayCartas.sort(()=>{
  return 0.5 - Math.random();
});

let caixa = document.getElementById("caixa")
let escolhidas = []
let pontos = 0

function criarGrade(){
  for (let index = 0; index < arrayCartas.length; index++) {
    let carta = document.createElement('img')
    carta.id = index
    carta.className = arrayCartas[index].nome
    carta.src = "imgs/carta.png"
    carta.addEventListener('click', escolher)
    caixa.appendChild(carta)
  }
}

function escolher(){
  let carta = this
  carta.src = arrayCartas[carta.id].img
  escolhidas.push(carta)

    if(escolhidas.length == 2){
      setTimeout(()=>{
      let carta1 = escolhidas[0]
      let carta2 = escolhidas[1]
  
      if(carta1.className == carta2.className){
        carta1.src = arrayCartas[carta.id].img
        carta2.src = arrayCartas[carta.id].img
        carta1.removeEventListener('click', escolher)
        carta2.removeEventListener('click', escolher)
        pontos++
      }
      else{
        carta1.src = "imgs/carta.png"
        carta2.src = "imgs/carta.png"
      }

      if(pontos == arrayCartas.length / 2){
        alert('foi boa')
        window.location.reload();
      }
      escolhidas = []
    }, 400)
  }
  
}

