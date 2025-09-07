let idx = 1;
let interval;
showSlides(idx);

function control(x){
  clearInterval(interval);
  showSlides(idx += x);
  interval = setInterval(() =>{
    control(1);
  },5000);
}

function showSlides(x){
  let i;
  let slides = document.getElementsByClassName("item");

  if(x > slides.length){
    idx = 1;
  }
  if(x < 1){
    idx = slides.length
  }
  for(i = 0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[idx-1].style.display = "block";
}

interval = setInterval(()=>{
  control(1);
}, 5000);

