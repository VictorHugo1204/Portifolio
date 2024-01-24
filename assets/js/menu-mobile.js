const menuDiv = document.getElementById('menu-mobile')
const btn = document.getElementById('btn-menu')

menuDiv.addEventListener('click', menu)

function menu(){
  menuDiv.classList.toggle('abrir')
  btn.classList.toggle('ativo')
}