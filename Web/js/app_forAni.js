const observer = new IntersectionObserver((ent) =>{
    ent.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll('.teamtag, .rdtag, .Address, .product, .content, .teamtag, .vismis, .est');
hidden.forEach((el) => observer.observe(el));