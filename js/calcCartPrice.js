function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    
    let priceTotal = 0;

    cartItems.forEach(function(item) {
        const emountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(emountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += currentPrice;
    });

    // Add delivery cost to the total price
    priceTotal += getDeliveryCost(priceTotal);

    totalPriceEl.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    // Set delivery cost based on the total price
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250';
    }
}

// Function to calculate delivery cost based on the total price
function getDeliveryCost(totalPrice) {
    return totalPrice < 600 ? 250 : 0;
}