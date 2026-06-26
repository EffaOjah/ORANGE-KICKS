const cartContainer =
document.getElementById("cart-items");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach((product,index)=>{
    if(cart.length === 0){

    cartContainer.innerHTML = `
        <div class="empty-state">
            <h2>Your cart is empty</h2>
            <p>Add some shoes to get started.</p>

            <a href="index.html">
                Continue Shopping
            </a>
        </div>
    `;

    return;
}

    total += product.price * product.quantity;

    cartContainer.innerHTML += `

    <div class="cart-item">

        <img src="${product.image}" width="120">

        <h3>${product.name}</h3>

        <p>$${product.price}</p>

        <p>Qty: ${product.quantity}</p>

        <button onclick="removeItem(${index})">
            Remove
        </button>

    </div>

    `;

});

document.getElementById("total")
.innerText = `Total: $${total.toFixed(2)}`;

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}

document
.getElementById("checkout-btn")
.addEventListener("click", checkout);

function checkout(){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){

        alert("Your cart is empty.");

        return;
    }

    let message =
`Hello, I would like to place an order.

--------------------------
ORDER DETAILS
--------------------------

`;

    let grandTotal = 0;

    cart.forEach(item => {

        const subtotal =
        item.price * item.quantity;

        grandTotal += subtotal;

        message +=
`${item.name}
Quantity: ${item.quantity}
Price: $${item.price}
Subtotal: $${subtotal}

`;
    });

    message +=
`--------------------------
TOTAL: $${grandTotal.toFixed(2)}
--------------------------`;

    const whatsappURL =
`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}