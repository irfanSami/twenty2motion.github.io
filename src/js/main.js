const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click',()=>{
    nav.classList.remove('active');
  })
}

let icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("darkmode");
  if(document.body.classList.contains("darkmode")){
    icon.src = "./src/images/home/moon.png";
  }else{
    icon.src = "./src/images/home/sun.png";
  }
}