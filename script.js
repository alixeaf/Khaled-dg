let cartItems = [];
let total = 0;

function addToCart(productId) {
    // Assume product prices are $10 for simplicity
    const productPrice = 10;
    
    cartItems.push(`Product ${productId}`);
    total += productPrice;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear previous items
    cartList.innerHTML = '';

    // Populate the cart
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartList.appendChild(listItem);
    });

    // Update total
    totalElement.textContent = `الإجمالي: $${total.toFixed(2)}`;
}