// Seleção de elementos
const img = document.querySelector('img')
const lampOn = document.querySelector('#ligar')
const lampOff = document.querySelector('#desligar')

// Functions

const corrigirLamp = () => {
  return img.src.indexOf('quebrada') > -1
}

const turnOn = () => {
  if(!corrigirLamp()) {
    img.src = './img/ligada.jpg'
  }
}

const turnOff = () => {
  if(!corrigirLamp()){
    img.src = './img/desligada.jpg'
  }
}

const lampQuebrada = () => {
  img.src = './img/quebrada.jpg'
  
}

// Eventos
lampOn.addEventListener('click', turnOn)
lampOff.addEventListener('click', turnOff)
img.addEventListener('mouseover', turnOn)
img.addEventListener('mouseleave', turnOff)
img.addEventListener('dblclick', lampQuebrada)
corrigirLamp()