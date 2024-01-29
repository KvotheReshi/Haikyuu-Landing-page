// power,jump,stamina,strategy,technique,speed

const daichi = {
  src: './assets/info-daichi.jpg',
  power:4,
  jump:3,
  stamina:3,
  strategy:4,
  technique:4,
  speed:3
}

const sugawara = {
  src: './assets/info-sugawara.jpg',
  power:2,
  jump:2,
  stamina:2,
  strategy:4,
  technique:4,
  speed:2
}
const asahi = {
  src: './assets/info-asahi.jpg',
  power:5,
  jump:3,
  stamina:3,
  strategy:3,
  technique:3,
  speed:2
}
const ennoshita = {
  src: './assets/info-ennoshita.jpg',
  power:3,
  jump:2,
  stamina:3,
  strategy:3,
  technique:3,
  speed:2
}
const noya = {
  src: './assets/info-noya.jpg',
  power:2,
  jump:4,
  stamina:5,
  strategy:4,
  technique:3,
  speed:5
}
const tanaka = {
  src: './assets/info-tanaka.jpg',
  power:5,
  jump:3,
  stamina:4,
  strategy:1,
  technique:2,
  speed:3
} 

const hinata = {
  src: './assets/info-hinata.jpg',
  power:1,
  jump:5,
  stamina:5,
  strategy:1,
  technique:1,
  speed:5
}

const kageyama = {
  src: './assets/info-kageyama.jpg',
  power:4,
  jump:4,
  stamina:5,
  strategy:5,
  technique:5,
  speed:4
}
const tsuki = {
  src: './assets/info-tsuki.jpg',
  power:2,
  jump:3,
  stamina:3,
  strategy:5,
  technique:3,
  speed:3
}
const tadashi = {
  src: './assets/info-tadashi.jpg',
  power:2,
  jump:3,
  stamina:2,
  strategy:3,
  technique:2,
  speed:3
}

const allCharacters = [daichi,sugawara,asahi,ennoshita,noya,tanaka,hinata,kageyama,tsuki,tadashi];

function getCharacter(src) { 
  return allCharacters.filter(x => x.src === src);
}