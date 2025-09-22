function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.add('active');
    overlay.classList.add('active');

    document.body.style.overflow = 'hidden';

    const emptyCart = document.getElementById('emptyCart')
    emptyCart.style.display = 'none';
    if (cart.length != 0) {
        
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay')

    sidebar.classList.remove('active');
    overlay.classList.remove('active');

    document.body.style.overflow = ''; 
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

function populateProductCards() {
    const productCards = document.querySelectorAll(".product-card");

    // console.log(productCards)

    productCards.forEach(card => {
        
        const productId = card.getAttribute('data-product-id');

        const product = productsData[productId];

        console.log(product)
        console.log("productId is " + productId + " and the product (productsData[productId] is above)")

        card.querySelector('.product-image').textContent = product.image;
        card.querySelector('.product-name').textContent = product.name;
        card.querySelector('.product-description').textContent = product.description;
        card.querySelector('.product-price').textContent = '$ ' + product.price;

    });
}

function addToCart(id) {
    cart.push(productsData[id]);

    console.log(cart);
}

document.addEventListener('DOMContentLoaded', populateProductCards);