const imgHinata = document.getElementById('hinata');
const infoHinata = document.getElementById('info-shoyo');
const imgKageyama = document.getElementById('kageyama');
const infoKageyama = document.getElementById('info-tobio');

imgHinata.addEventListener('mouseover',function(){
  infoHinata.style.opacity = 100
});
imgHinata.addEventListener('mouseout',function(){
  infoHinata.style.opacity = 0
});

imgKageyama.addEventListener('mouseover',function(){
  infoKageyama.style.opacity = 100
});
imgKageyama.addEventListener('mouseout',function(){
  infoKageyama.style.opacity = 0
});