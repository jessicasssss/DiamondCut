function show(event){
    document.querySelector('.tBox').value = event
}

let dd = document.querySelector('.dropdown')
dd.onclick = function(){
    dd.classList.toggle('active')
}

document.addEventListener('click', function(event) {
    let ntclicked = dd.contains(event.target);

    if (!ntclicked) {
        dd.classList.remove('active');
    }
});

function carshow(events){
    document.querySelector('.tBox').value = events
    document.querySelector('.NEW-CARS').style.display = 'none';
    document.querySelector('.USED-CARS').style.display = 'none';

    if(events === 'New Cars'){
        console.log('masuk')
        document.querySelector('.NEW-CARS').style.display = 'block'
    }
    else if (events === 'Used Cars'){
        document.querySelector('.USED-CARS').style.display = 'block'
    }
}

function start() {
    carshow('New Cars');
}

document.addEventListener('DOMContentLoaded', start);