
var button = document.querySelector('#botonMenu');

function menuButton(){

var menu = document.querySelector('#menu');
if (menu.style.display == 'none') {
  menu.style.display = 'block';
  console.log('llega');
}
else {
  menu.style.display = 'none';
}
}



button.addEventListener('click', menuButton);
