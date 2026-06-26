// CART

const cartButtons = document.querySelectorAll(".add-cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.id === product.id);

        if(existing){

            existing.quantity++;

        } else {

            cart.push(product);

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart!");
    });

});


// WISHLIST

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image
        };

        let wishlist = JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

        const exists = wishlist.some(
            item => item.id === product.id
        );

        if(!exists){

            wishlist.push(product);

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            alert("Added to wishlist!");
        }
        else{

            alert("Already in wishlist");
        }

    });

});

function updateCounts(){

    const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    document.getElementById("cart-count").textContent =
    cart.length;

    document.getElementById("wishlist-count").textContent =
    wishlist.length;
}

updateCounts();