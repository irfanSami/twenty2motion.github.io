const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// if(bar){
//   bar.addEventListener('click',()=>{
//     nav.classList.add('active');
//   })
// }

// if(close){
//   close.addEventListener('click',()=>{
//     nav.classList.remove('active');
//   })
// }
document.querySelector('#bar').addEventListener('click', ()=>{
  nav.classList.add('active');
});

document.querySelector('#close').addEventListener('click', ()=>{
  nav.classList.remove('active');
});


document.querySelector('#navbar').addEventListener('click',()=>{
  nav.classList.remove('active');
});

document.querySelector('.container-top').addEventListener('click',()=>{
  nav.classList.remove('active');
});

document.querySelector('.container-bottom').addEventListener('click',()=>{
  nav.classList.remove('active');
});

document.querySelector('.footer').addEventListener('click',()=>{
  nav.classList.remove('active');
});

document.querySelector('.hero').addEventListener('click',()=>{
  nav.classList.remove('active');
});

let icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("darkmode");
  if(document.body.classList.contains("darkmode")){
    icon.src = "./src/images/home/moon.png";
  }else{
    icon.src = "./src/images/home/sun.png";
  }
}

// $(document).ready(()=>{
//   $('.menu-btn').click(()=>{
//     $('.navbar .menu').toggleClass("active");
//     $('.menu-btn i').toggleClass("active");
//   });
// })