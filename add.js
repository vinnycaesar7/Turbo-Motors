document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".card").forEach((card) => {
        let addToCartBtn = card.querySelector(".add-to-cart-btn");

        if (!addToCartBtn) {
            addToCartBtn = document.createElement("a");
            addToCartBtn.href = "add.html"; 
            addToCartBtn.classList.add("add-to-cart-btn");
            addToCartBtn.innerText = "Add to Cart";
            card.appendChild(addToCartBtn);
        }

        addToCartBtn.addEventListener("click", function (event) {
            event.preventDefault();

            const name = card.querySelector("h3").innerText;
            const price = card.querySelector("p").innerText.replace("Price: $", "").trim();
            const image = card.querySelector("img").src;

            let existingItem = cart.find((item) => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage

            alert(`${name} added to cart!`);
        });
    });
});
