let hcontroll = document.querySelector('.featured-cars');
let bback = document.getElementById("back");
let nnext = document.getElementById("next");
 
hcontroll.addEventListener('wheel', (event)=>{
  event.preventDefault();
  hcontroll.scrollLeft += event.deltaY;
  hcontroll.style.scrollBehavior = "auto";
})

nnext.addEventListener('click', ()=>{
  hcontroll.style.scrollBehavior = "smooth";
  hcontroll.scrollLeft += 900;
})
bback.addEventListener('click', ()=>{
  hcontroll.style.scrollBehavior = "smooth";
  hcontroll.scrollLeft -= 900;
})
