
var button = document.querySelector('#botonMenu');

function menuButton(){

var btn = document.querySelector('#botonMenu');
if (btn.style.display = 'none') {
  btn.style.display = 'block';
  console.log('llega');
}
else {
  btn.style.display = 'none';
}
}



button.addEventListener('click', menuButton);
