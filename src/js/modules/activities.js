import ItcCollapse from "./collapse.js";

document.addEventListener('click', function (event) {
    if (event.target.closest('.js-activities__menu-button')) {
        if (document.querySelectorAll('.act_active')) {
            for (const el of document.querySelectorAll('.act_active')) {
                el.classList.remove('act_active');
            }            
        }
        const currentElement = event.target.closest('.js-activities__menu-button');
        let block = document.getElementById(currentElement.dataset.id);
        block.classList.add('act_active');
        currentElement.classList.add('act_active');
    }
    if (event.target.closest('.js-activities__auto-menu-button')) {
        if (document.querySelectorAll('.auto_active')) {
            for (const el of document.querySelectorAll('.auto_active')) {
                el.classList.remove('auto_active');
            }            
        }
        const currentElement = event.target.closest('.js-activities__auto-menu-button');
        let block = document.getElementById(currentElement.dataset.id);
        block.classList.add('auto_active');
        currentElement.classList.add('auto_active');
    }
})





document.addEventListener('click', function (event) {
    if (event.target.closest('.accordion__item')) {
        const el = event.target.closest('.accordion__item').parentElement.querySelector('.collapse');
        const collapse = new ItcCollapse(el);
        if (document.querySelector('.activities__collapse-show')) {
            const old_collapse = new ItcCollapse(document.querySelector('.activities__collapse-show'));
            document.querySelector('.activities__collapse-show').classList.remove('activities__collapse-show');
            old_collapse.hide();
        }
        el.classList.add('activities__collapse-show');
        collapse.toggle();
    }
})