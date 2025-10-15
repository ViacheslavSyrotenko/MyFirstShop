function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.add('active');
    overlay.classList.add('active');

    document.body.style.overflow = 'hidden';


    if (cart.length > 0) {
        const emptyCart = document.getElementById('emptyCart')
        emptyCart.style.display = 'none';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay')

    sidebar.classList.remove('active');
    overlay.classList.remove('active');

    document.body.style.overflow = ''; 
}

function showCheckout() {
    if (cart.length > 0) {
        document.getElementById('emptyCart').style.display = 'none';
        document.getElementById('totalCart').style.display = 'none';
        document.getElementById('sidebarcontainer').style.display = 'none';
        
        document.getElementById('checkoutForm').style.display = 'flex';
        document.getElementById('checkoutTotal').textContent = "$ " + total;
    }
}

function closeCheckout() {
        document.getElementById('emptyCart').style.display = 'none';
        document.getElementById('totalCart').style.display = 'flex';
        document.getElementById('sidebarcontainer').style.display = 'block';
        
        document.getElementById('checkoutForm').style.display = 'none';
}

const productsData = {
    1: {
        name: "iPhone 15 Pro",
        price: 999,
        description: "Latest iPhone with titanium design",
        image: "📱",
        category: "Electronics"
    },
    2: {
        name: "MacBook Air M3",
        price: 1299,
        description: "Powerful laptop with M3 chip",
        image: "💻",
        category: "Computers"
    },
    3: {
        name: "AirPods Pro",
        price: 249,
        description: "Wireless earbuds with noise cancellation",
        image: "🎧",
        category: "Audio"
    },
    4: {
        name: "Apple Watch Series 9",
        price: 399,
        description: "Advanced fitness and health tracking",
        image: "⌚",
        category: "Wearables"
    },
    5: {
        name: "iPad Pro 12.9",
        price: 1099,
        description: "Professional tablet with M2 chip",
        image: "📱",
        category: "Tablets"
    },
    6: {
        name: "Sony Alpha A7R V",
        price: 3899,
        description: "Professional mirrorless camera",
        image: "📷",
        category: "Photography"
    },
    7: {
        name: "PlayStation 5",
        price: 499,
        description: "Next-gen gaming console",
        image: "🎮",
        category: "Gaming"
    },
    8: {
        name: "Samsung 4K TV",
        price: 799,
        description: "65-inch smart TV with HDR",
        image: "📺",
        category: "Electronics"
    }
};

let = cart = [];
let total = 0;

function populateProductCards() {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        
        const productId = card.getAttribute('data-product-id');

        const product = productsData[productId];

        card.querySelector('.product-image').textContent = product.image;
        card.querySelector('.product-name').textContent = product.name;
        card.querySelector('.product-description').textContent = product.description;
        card.querySelector('.product-price').textContent = '$ ' + product.price;

    });
}

function addToCart(id) {
    cart.push(productsData[id]);

    const product = productsData[id];
    const parentElement = document.getElementById('sidebarcontainer')
    const totalId = document.getElementById('total');

    total += product.price;
    totalId.textContent = "$ " + total;

    const newProductCardCart = document.createElement("div");
    newProductCardCart.classList.add("product-card-cart");

    newProductCardCart.innerHTML = `
    <div class="card-cart-img"></div>
    <div class="card-cart-container">
      <div class="card-cart-title">iPhone 15 Pro</div>
      <div class="card-cart-container">...</div>
    </div>
  `;

    newProductCardCart.querySelector('.card-cart-title').textContent = product.name;
    newProductCardCart.querySelector('.card-cart-img').textContent = product.image;

    parentElement.appendChild(newProductCardCart);
}

function selectPayment(method) {

    document.querySelectorAll('.payment-method').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.creditCardForm').style.display = 'none'
    
    console.log(document.querySelector('.' + method));

    if (method === 'credit'){
        document.querySelector('.creditCardForm').style.display = 'block'
    }

    document.querySelector('.' + method).classList.add('active');
}


document.addEventListener('DOMContentLoaded', populateProductCards);


// Form

const form = document.getElementById("formContainer"); // Find the form in the page

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Stops the page from reloading

    const orderData = {
        fullName: form.fullName.value,
        email: form.email.value,
        phone: form.phone.value,
        city: form.city.value,
        zipCode: form.zipCode.value
    };

    try {
        // Send the data to the server using Fetch API
        const response = await fetch("/api/post", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(orderData)
        })

        const responseData = await response.json();
        console.log(responseData + "responseData")
        

        const statusMessage = document.getElementById("status");
        statusMessage.textContent = responseData.message;

    } catch (error) {
        console.error("Error sending order: ", error);
    }
})


