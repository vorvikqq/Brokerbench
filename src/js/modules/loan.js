document.addEventListener('click', function (event) {
    if (event.target.closest('.js-loan-li')) {
        if (document.querySelectorAll('.l_active')) {
            for (const el of document.querySelectorAll('.l_active')) {
                el.classList.remove('l_active');
            }            
        }
        const currentElement = event.target.closest('.js-loan-li');
        let block = document.getElementById(currentElement.dataset.id);
        block.classList.add('l_active');
        currentElement.classList.add('l_active');
    }
})
