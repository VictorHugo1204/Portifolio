function verMais(){
  var projetos=document.getElementById("mais-proj");
  var botao=document.getElementById("ver-mais");

  if(projetos.style.display === "none"){
    projetos.style.display="flex";
    botao.innerHTML="VER MENOS";
  }else{
    projetos.style.display="none";
    botao.innerHTML="VER MAIS";
    }
}