const header = document.querySelector('.header');
const img = document.getElementById('header-ico');
window.onscroll = function () {
    if (window.scrollY) {
        if(!header.classList.contains('active') )
        header.classList.add('active'); 
        img.src = img.dataset.srcBlack;
    }        
    else {
        if(header.classList.contains('active'))
        header.classList.remove('active');    
        img.src = img.dataset.src;
     }
               
}

let listButton = document.querySelector('.header__link-button');

listButton.addEventListener('click', function (event) {
    listButton.parentElement.classList.toggle('active');    
})
document.addEventListener('click', function (event) {   
    if (event.target.closest('.js-header-sub-menu'))
    listButton.parentElement.classList.remove('active');
   
    
})
listButton.addEventListener('mousedown', function (event) {
    event.preventDefault();
})
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__menu');
burger.onclick = function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('overflow');
    if(!header.classList.contains('active'))
        header.classList.add('active'); 
    
    if (header.classList.contains('active'))
        img.src = img.dataset.srcBlack;
    else
        img.src = img.dataset.src;  
    
    if (!window.scrollY) {
        if (!burger.classList.contains('active'))
        {
            header.classList.remove('active');
            img.src = img.dataset.src;
        }              
    }    
}
document.body.addEventListener('click', function (event) {
    if (nav.classList.contains('active')) {
        if (event.target.closest('a')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('overflow')
        }            
    }
})

