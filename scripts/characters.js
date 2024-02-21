// power,jump,stamina,strategy,technique,speed

const daichi = {
  src: './assets/newdaichi.png',
  power:4,
  jump:3,
  stamina:3,
  strategy:4,
  technique:4,
  speed:3
}

const sugawara = {
  src: './assets/newsugawara.png',
  power:2,
  jump:2,
  stamina:2,
  strategy:4,
  technique:4,
  speed:2
}
const asahi = {
  src: './assets/newasahi.png',
  power:5,
  jump:3,
  stamina:3,
  strategy:3,
  technique:3,
  speed:2
}
const ennoshita = {
  src: './assets/newennoshita.png',
  power:3,
  jump:2,
  stamina:3,
  strategy:3,
  technique:3,
  speed:2
}
const noya = {
  src: './assets/newnoya.png',
  power:2,
  jump:4,
  stamina:5,
  strategy:4,
  technique:3,
  speed:5
}
const tanaka = {
  src: './assets/newtanaka.png',
  power:5,
  jump:3,
  stamina:4,
  strategy:1,
  technique:2,
  speed:3
} 

const hinata = {
  src: './assets/newhinata.png',
  power:1,
  jump:5,
  stamina:5,
  strategy:1,
  technique:1,
  speed:5
}

const kageyama = {
  src: './assets/newkageyama.png',
  power:4,
  jump:4,
  stamina:5,
  strategy:5,
  technique:5,
  speed:4
}
const tsuki = {
  src: './assets/newtsuki.png',
  power:2,
  jump:3,
  stamina:3,
  strategy:5,
  technique:3,
  speed:3
}
const tadashi = {
  src: './assets/newtadashi.png',
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