
// let counter;

window.addEventListener('click', function(event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
            counter.innerText = String(parseInt(counter.innerText) + 1);
        }

        if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = String(parseInt(counter.innerText) - 1);
            } else if (event.target.closest('.cart-wrapper')) {
                event.target.closest('.cart-item').remove();

              toggleCartStatus();
              calcCartPrice();
            }
        }
    }


    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPrice();

    }
});
