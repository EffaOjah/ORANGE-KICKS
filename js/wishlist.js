const wishlistContainer =
document.getElementById("wishlist-items");

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.forEach((product,index)=>{

    wishlistContainer.innerHTML += `

    <div class="wishlist-item">

        <img src="${product.image}" width="120">

        <h3>${product.name}</h3>

        <p>$${product.price}</p>

        <button onclick="removeWishlist(${index})">
            Remove
        </button>

    </div>

    `;

});

function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();
}