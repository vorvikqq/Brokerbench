import ItcCollapse from "./collapse.js";


let img = document.querySelector('.questions__image');
document.addEventListener('click', function (event) {
    if (event.target.closest('.answers__header')) {
        const el = event.target.closest('.answers__header').parentElement.querySelector('.collapse');
        const collapse = new ItcCollapse(el,300);
        event.target.closest('.answers__header').parentElement.classList.toggle('active');
        collapse.toggle();
        setTimeout(() => {
            if (document.querySelector('.answers').querySelector('.collapse_show')) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
            
        }, 600);
         
    }

})