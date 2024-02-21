function checkout() {
    // Prepare cart data for passing to checkout page
    const cartData = encodeURIComponent(JSON.stringify(cartItems));
    const total = encodeURIComponent(cartTotal.toFixed(2));

    // Navigate to checkout page with query parameters
    window.location.href = `checkout.html?cartData=${cartData}&total=${total}`;
}
// checkout.js

document.addEventListener('DOMContentLoaded', function () {
    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const cartDataParam = urlParams.get('cartData');
    const totalParam = urlParams.get('total');

    // Parse cart data and update the checkout page
    if (cartDataParam && totalParam) {
        const cartItemsSummaryElement = document.getElementById("cart-items-summary");
        const cartTotalSummaryElement = document.getElementById("cart-total-summary");

        const cartData = JSON.parse(decodeURIComponent(cartDataParam));
        const total = parseFloat(decodeURIComponent(totalParam));

        cartData.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
            cartItemsSummaryElement.appendChild(listItem);
        });

        cartTotalSummaryElement.textContent = total.toFixed(2);
    } else {
        // Handle case where cart data is not available
        console.error("Cart data or total not found in query parameters.");
    }
});

function completePurchase() {
    // Perform any additional logic or validation here
    alert("Thank you for your purchase!");
    window.location.href = "index.html"; // Redirect to the homepage or a thank you page
}
// checkout.js

document.addEventListener('DOMContentLoaded', function () {
    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const cartDataParam = urlParams.get('cartData');
    const totalParam = urlParams.get('total');

    // Parse cart data and update the checkout page
    if (cartDataParam && totalParam) {
        const cartItemsSummaryElement = document.getElementById("cart-items-summary");
        const cartTotalSummaryElement = document.getElementById("cart-total-summary");

        const cartData = JSON.parse(decodeURIComponent(cartDataParam));
        const total = parseFloat(decodeURIComponent(totalParam));

        cartData.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
            cartItemsSummaryElement.appendChild(listItem);
        });

        cartTotalSummaryElement.textContent = total.toFixed(2);
    } else {
        // Handle case where cart data or total is not available
        console.error("Cart data or total not found in query parameters.");
    }
});

function completePurchase() {
    // Perform any additional logic or validation here
    alert(`Thank you for your purchase!\nTotal Amount: `);
    window.location.href = "index.html"; // Redirect to the homepage or a thank you page
}
