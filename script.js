let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
// === ADD TO CART FUNCTIONALITY ===
let cart = [];
const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartToggle = document.getElementById("cart-toggle");

// Toggle Cart View
cartToggle.addEventListener("click", () => {
    cartItems.classList.toggle("hidden");
});

// Handle "ADD TO CART"
const addToCartButtons = document.querySelectorAll(".checkout button:first-child");
addToCartButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const currentItem = document.querySelectorAll(".carousel .list .item")[index];
        const title = currentItem.querySelector(".detail .title").innerText;
        const price = "₹1000"; // Example static price
        cart.push({ title, price });
        updateCartUI();
    });
});

function updateCartUI() {
    cartList.innerHTML = "";
    cart.forEach((item, idx) => {
        const li = document.createElement("li");
        li.textContent = `${item.title} - ${item.price}`;
        cartList.appendChild(li);
    });
    cartCount.textContent = cart.length;
}
