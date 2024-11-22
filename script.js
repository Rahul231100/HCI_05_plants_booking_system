// Cart management using localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart(productName, price) {
    // Add the product to the cart array
    cart.push({ name: productName, price: price });

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart count in the navbar
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }

    // Alert the user
    alert(`${productName} has been added to your cart!`);
}

// Function to show cart items on the cart page
function showCart() {
    const cartItemsContainer = document.getElementById("cart-items");

    // Check if we are on the cart page
    if (!cartItemsContainer) return;

    // Clear existing content
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price}
                    <button onclick="removeFromCart(${index})">Remove</button>
                </p>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item from the cart array
    cart.splice(index, 1);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart count in the navbar
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }

    // Refresh the cart display
    showCart();
}

// Function to handle checkout
function checkout() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
        return;
    }

    // Get the delivery details from the form
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const phone = document.getElementById("phone").value;

    // Validate the form fields
    if (!name || !address || !city || !zip || !phone) {
        alert("Please fill in all the fields.");
        return;
    }

    // Prepare the list of items in the cart
    let cartDetails = "";
    let totalAmount = 0;
    cart.forEach(item => {
        cartDetails += `${item.name} - $${item.price}\n`;
        totalAmount += item.price;
    });

    // Display a confirmation message with the delivery details and cart items
    alert(`
        Checkout Successful!
        
        Name: ${name}
        Address: ${address}
        City: ${city}
        ZIP Code: ${zip}
        Phone: ${phone}

        Items in your cart:
        ${cartDetails}
        
        Total Amount: $${totalAmount}

        Your order has been successfully placed. Thank you for shopping with us!
    `);

    // Optionally, clear the cart after checkout
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reset the cart count in the navbar
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }

    // Optionally, clear the form
    document.getElementById("address-form").reset();

    // Optionally, redirect to a "Thank You" or "Order Confirmation" page
    // window.location.href = "thankyou.html";
}


// Initialize cart count in the navbar
document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }

    // Call `showCart` if on the cart page
    showCart();
});

// Function to display product details based on the type of plant
function showProductDetails(productType) {
    const productDetailsSection = document.getElementById("product-details");

    // Check if the product details section exists
    if (!productDetailsSection) {
        console.error("Product details section not found in the HTML.");
        return;
    }

    // Clear the product details section
    productDetailsSection.innerHTML = "";

    // Show details based on the selected category
    if (productType === "flowering") {
        productDetailsSection.innerHTML = `
            <h3>Flowering Plant</h3>
             <div class="plant-container">
                <div class="plant">
                    <h4>Rose</h4>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG" alt="Rose">
                    <p>A beautiful flowering plant with colorful blooms.</p>
                    <p>Price: $15.00</p>
                    <button onclick="addToCart('Rose', 15)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Tulip</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ925uNjWUHdvY2RTlv9a67wOCrRK8BX5sCMQ&s" alt="Tulip">
                    <p>Vibrant and perfect for spring gardens.</p>
                    <p>Price: $12.00</p>
                    <button onclick="addToCart('Tulip', 12)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Sunflower</h4>
                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1726819284&width=2048" alt="Sunflower">
                    <p>Bright yellow flowers that follow the sun.</p>
                    <p>Price: $10.00</p>
                    <button onclick="addToCart('Sunflower', 10)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Lily</h4>
                    <img src="https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg" alt="Lily">
                    <p>Elegant and fragrant flowers for gardens.</p>
                    <p>Price: $14.00</p>
                    <button onclick="addToCart('Lily', 14)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Daisy</h4>
                    <img src="https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpc3l8ZW58MHx8MHx8fDA%3D" alt="Daisy">
                    <p>Simple yet charming flowers for any occasion.</p>
                    <p>Price: $8.00</p>
                    <button onclick="addToCart('Daisy', 8)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Orchid</h4>
                    <img src="https://www.datocms-assets.com/32926/1725461318-3a_bb-orchids_bloomsy-orchid-subscription_lifestyle.jpg" alt="Orchid">
                    <p>Exquisite and luxurious blooms for special events.</p>
                    <p>Price: $25.00</p>
                    <button onclick="addToCart('Orchid', 25)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Petunia</h4>
                    <img src="https://www.allthatgrows.in/cdn/shop/products/Petunia_Rose_of_Heavens_Pink.jpg?v=1509644672" alt="Petunia">
                    <p>Colorful flowers ideal for hanging baskets.</p>
                    <p>Price: $9.00</p>
                    <button onclick="addToCart('Petunia', 9)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Marigold</h4>
                    <img src="https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg" alt="Marigold">
                    <p>Golden blooms that brighten any space.</p>
                    <p>Price: $7.00</p>
                    <button onclick="addToCart('Marigold', 7)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Hibiscus</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVXnkj1ytXlc43hEweGYVSP9_-khiJDerSg&s" alt="Hibiscus">
                    <p>Tropical flowers with vibrant hues.</p>
                    <p>Price: $13.00</p>
                    <button onclick="addToCart('Hibiscus', 13)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Begonia</h4>
                    <img src="https://t3.ftcdn.net/jpg/01/22/74/36/360_F_122743642_9qBv0KZMojzAbpTKzoMjsKu36P0tJtAI.jpg" alt="Begonia">
                    <p>Lovely flowers for shaded gardens.</p>
                    <p>Price: $11.00</p>
                    <button onclick="addToCart('Begonia', 11)">Add to Cart</button>
                </div>
                <!-- Additional plants added here -->
                <div class="plant">
                    <h4>Camellia</h4>
                    <img src="https://m.media-amazon.com/images/I/71C0jfCm60L.jpg" alt="Camellia">
                    <p>Gorgeous flowers that bloom in winter.</p>
                    <p>Price: $18.00</p>
                    <button onclick="addToCart('Camellia', 18)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Geranium</h4>
                    <img src="https://seedsnpots.com/wp-content/uploads/2018/08/geranium-cabaret.jpg" alt="Geranium">
                    <p>Colorful, hardy flowers for any garden.</p>
                    <p>Price: $10.00</p>
                    <button onclick="addToCart('Geranium', 10)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Chrysanthemum</h4>
                    <img src="https://m.media-amazon.com/images/I/515BhXiaksL._AC_UF350,350_QL80_.jpg" alt="Chrysanthemum">
                    <p>Classic autumn bloomers, perfect for bouquets.</p>
                    <p>Price: $12.00</p>
                    <button onclick="addToCart('Chrysanthemum', 12)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Gardenia</h4>
                    <img src="https://hugaplant.com/cdn/shop/products/1_e166379e-8c67-4ee5-bd4b-268b03196fd8.png?v=1680512751&width=1080" alt="Gardenia">
                    <p>Fragrant and elegant white blooms.</p>
                    <p>Price: $20.00</p>
                    <button onclick="addToCart('Gardenia', 20)">Add to Cart</button>
                </div>
                <div class="plant">
                    <h4>Lavender</h4>
                    <img src="https://m.media-amazon.com/images/I/81euKzQpXjL.jpg" alt="Lavender">
                    <p>Popular for its fragrance and purple flowers.</p>
                    <p>Price: $16.00</p>
                    <button onclick="addToCart('Lavender', 16)">Add to Cart</button>
                </div>
            </div>
        `;
    } else if (productType === "indoor") {
        productDetailsSection.innerHTML = `
              <h3>Indoor Plants</h3>
            <div class="plant">
                <h4>Spider Plant</h4>
                <img src="https://plantshub.in/wp-content/uploads/2023/06/5b59a7f8-e644-477e-99b4-8fd8f0e24ebb-jpg.webp" alt="Spider Plant">
                <p>Easy to care for and great for indoors.</p>
                <p>Price: $10</p>
                <button onclick="addToCart('Spider Plant', 10)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Snake Plant</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxD2E4oZJUMEBdbbCzgJ2tB-DTA0Djmzt29g&s" alt="Snake Plant">
                <p>Perfect for low light conditions.</p>
                <p>Price: $12</p>
                <button onclick="addToCart('Snake Plant', 12)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Peace Lily</h4>
                <img src="https://cdn.mos.cms.futurecdn.net/qYNPupRnspGWPF4886Z7hB.jpg" alt="Peace Lily">
                <p>Produces beautiful white flowers indoors.</p>
                <p>Price: $15</p>
                <button onclick="addToCart('Peace Lily', 15)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>English Ivy</h4>
                <img src="https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/04/Products-12.jpg" alt="English Ivy">
                <p>Great for hanging baskets indoors.</p>
                <p>Price: $8</p>
                <button onclick="addToCart('English Ivy', 8)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Philodendron</h4>
                <img src="https://rukminim2.flixcart.com/image/850/1000/l3lx8cw0/plant-sapling/s/i/s/no-perennial-yes-philodendron-plant-p5-1-elite-green-original-imagep2zyashtgaz.jpeg?q=20&crop=false" alt="Philodendron">
                <p>Thrives in moderate light and low humidity.</p>
                <p>Price: $14</p>
                <button onclick="addToCart('Philodendron', 14)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Ficus</h4>
                <img src="https://unlimitedgreens.com/cdn/shop/products/Ficus-mini.webp?v=1676460355" alt="Ficus">
                <p>Easy-to-care-for plant that fits in most rooms.</p>
                <p>Price: $18</p>
                <button onclick="addToCart('Ficus', 18)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Monstera</h4>
                <img src="https://soltech.com/cdn/shop/files/MonsteraDeliciosa_1200x.jpg?v=1685980364" alt="Monstera">
                <p>Big leaves that bring tropical vibes to your space.</p>
                <p>Price: $20</p>
                <button onclick="addToCart('Monstera', 20)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>ZZ Plant</h4>
                <img src="https://m.media-amazon.com/images/I/61ZRN9vL1FL._AC_UF1000,1000_QL80_.jpg" alt="ZZ Plant">
                <p>Low-maintenance and can tolerate low light.</p>
                <p>Price: $12</p>
                <button onclick="addToCart('ZZ Plant', 12)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Areca Palm</h4>
                <img src="https://urbano.in/wp-content/uploads/2019/12/Areca-Palm-plant.jpg" alt="Areca Palm">
                <p>Perfect for air purifying and adding a tropical touch.</p>
                <p>Price: $22</p>
                <button onclick="addToCart('Areca Palm', 22)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Chinese Evergreen</h4>
                <img src="https://static1.squarespace.com/static/5e1a9e93d343ec0c523f4074/5e1be185a252892821e13d9f/5e87e88c87b9e86b9342711e/1718711894320/Red-Chinese-Evergreen.jpg?format=1500w" alt="Chinese Evergreen">
                <p>Beautiful indoor plant that thrives in shade.</p>
                <p>Price: $18</p>
                <button onclick="addToCart('Chinese Evergreen', 18)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Dracaena</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYtTv95l7Hk2OuSYTZHthki9WprrKjLTAvg&s" alt="Dracaena">
                <p>Unique leaves that grow in an upright fashion.</p>
                <p>Price: $25</p>
                <button onclick="addToCart('Dracaena', 25)">Add to Cart</button>
            </div>
        `;
        
    } else if (productType === "succulent") {
        productDetailsSection.innerHTML = `
            <h3>Succulents</h3>
            <div class="plant">
                <h4>Aloe Vera</h4>
                <img src="https://www.mskcc.org/sites/default/files/styles/large/public/node/3169/images/Aloe-Vera_3x2.jpg" alt="Aloe Vera">
                <p>Known for its medicinal properties.</p>
                <p>Price: $8</p>
                <button onclick="addToCart('Aloe Vera', 8)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Jade Plant</h4>
                <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-crassula-ovata-jade-plant-money-plant-royalty-free-image-1722349156.jpg?crop=0.668xw:1.00xh;0.194xw,0&resize=1120:*" alt="Jade Plant">
                <p>A symbol of good luck and prosperity.</p>
                <p>Price: $10</p>
                <button onclick="addToCart('Jade Plant', 10)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>String of Pearls</h4>
                <img src="https://cdn.makemygarden.com/uploads/2021/09/199.jpg" alt="String of Pearls">
                <p>Small, round leaves that look like pearls.</p>
                <p>Price: $12</p>
                <button onclick="addToCart('String of Pearls', 12)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Succulent Mix</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrhutlStWPVbJyqBJF-qFy3XD4kK-Wg43dg&s" alt="Succulent Mix">
                <p>A mix of various popular succulents.</p>
                <p>Price: $15</p>
                <button onclick="addToCart('Succulent Mix', 15)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Hens and Chicks</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rL8AoJUabkhrpLu-xXF3-s00lLuSOUA7Fg&s" alt="Hens and Chicks">
                <p>A cute succulent with rosette-shaped leaves.</p>
                <p>Price: $12</p>
                <button onclick="addToCart('Hens and Chicks', 12)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Burro's Tail</h4>
                <img src="https://m.media-amazon.com/images/I/51d0rvjXvaL._AC_UF1000,1000_QL80_.jpg" alt="Burro's Tail">
                <p>Long trailing stems covered with tiny green leaves.</p>
                <p>Price: $14</p>
                <button onclick="addToCart('Burro\'s Tail', 14)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Sempervivum</h4>
                <img src="https://kumaunplants.com/cdn/shop/files/WhatsAppImage2024-05-03at3.43.10PM.jpg?v=1714731237" alt="Sempervivum">
                <p>Also known as 'Houseleeks', it's an easy-to-care-for plant.</p>
                <p>Price: $10</p>
                <button onclick="addToCart('Sempervivum', 10)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Echeveria</h4>
                <img src="https://i.etsystatic.com/10267921/r/il/d9fb66/5381152342/il_1080xN.5381152342_jgl4.jpg" alt="Echeveria">
                <p>Rosette-shaped succulent with colorful leaves.</p>
                <p>Price: $12</p>
                <button onclick="addToCart('Echeveria', 12)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Opuntia</h4>
                <img src="https://i0.wp.com/growing-hobby.com/wp-content/uploads/Opuntia-prickly-pear-flowering.png?fit=675%2C675&ssl=1" alt="Opuntia">
                <p>Also called prickly pear, it's a unique succulent.</p>
                <p>Price: $18</p>
                <button onclick="addToCart('Opuntia', 18)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Agave</h4>
                <img src="https://cdn.pixabay.com/photo/2014/07/05/00/14/dragon-tree-agave-384361_1280.jpg" alt="Agave">
                <p>Large, spiky leaves that form a rosette pattern.</p>
                <p>Price: $20</p>
                <button onclick="addToCart('Agave', 20)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Crassula</h4>
                <img src="https://littleprinceplants.com/wp-content/uploads/Crassula-brevifolia-JUNE3-1-e1568142713781.jpg" alt="Crassula">
                <p>Commonly known as jade tree or money plant.</p>
                <p>Price: $15</p>
                <button onclick="addToCart('Crassula', 15)">Add to Cart</button>
            </div>
            <div class="plant">
                <h4>Kalanchoe</h4>
                <img src="https://nurserylive.com/cdn/shop/products/nurserylive-top-3-beautiful-kalanchoe-flowers-of-the-season_2bf1cb4b-6f40-4ddd-be36-9fd01ce1e913_512x512.jpg?v=1634230087" alt="Kalanchoe">
                <p>Known for its colorful flowers and easy maintenance.</p>
                <p>Price: $18</p>
                <button onclick="addToCart('Kalanchoe', 18)">Add to Cart</button>
            </div>
        `;
    } else {
        productDetailsSection.innerHTML = `<p>Invalid category selected.</p>`;
    }

    // Display the product details section
    productDetailsSection.style.display = "block";
}

// Add event listeners for buttons to show product details
document.addEventListener("DOMContentLoaded", () => {
    const floweringButton = document.querySelector('button[onclick="showProductDetails(\'flowering\')"]');
    const indoorButton = document.querySelector('button[onclick="showProductDetails(\'indoor\')"]');
    const succulentButton = document.querySelector('button[onclick="showProductDetails(\'succulent\')"]');

    if (floweringButton) floweringButton.addEventListener("click", () => showProductDetails("flowering"));
    if (indoorButton) indoorButton.addEventListener("click", () => showProductDetails("indoor"));
    if (succulentButton) succulentButton.addEventListener("click", () => showProductDetails("succulent"));
});

