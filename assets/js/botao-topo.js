window.addEventListener("scroll", function(){
  let topo = document.querySelector('#topo')
  topo.classList.toggle('topo',window.scrollY > 0)
})