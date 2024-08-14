
/*
// Select all buttons
const buttons = document.querySelectorAll('.img button');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});

*/


// adding and removing Items

var x= 0;
document.getElementById("c").innerText= x;
function add(val){

    document.getElementById("hello").innerHTML +="<li>"+val+
    "<input type='button' value='X' onclick='remove()'></li>";

    x= x+1;
    document.getElementById("c").innerText= x;

}

//removing  script

function remove(){


var listItem = document.getElementsByTagName("li");
for(var i=0; i<listItem.length; i++){

    listItem[i].onclick= function(){
        this.parentNode.removeChild(this);
    }

}

x = x-1;
document.getElementById("c").innerText=x;

}

/*
const products = [
    { name: "TO KILL A MOKING BIRD", price: 1250, id: 1, quantity: 1},
    { name: "Harry Potter", price: 9500, id: 2, quantity: 1},
    { name: "The Old Man And The Sea", price: 900, id: 3, quantity: 1, },
    { name: "The Lord Of Ring", price: 1000, id: 4, quantity: 1, },
    { name: "War And Peace", price: 800, id: 5, quantity: 1, },
    { name: "Kindom Of God", price: 1500, id: 6, quantity: 1,},
    { name: "The Kite Runner", price: 2000, id: 7, quantity: 1,},
    { name: "The Alchemist", price: 1800, id: 8, quantity: 1,},
    { name: "The Road", price: 1100, id: 9, quantity: 1,},
    { name: "A Tale Of Two Cities", price: 900, id: 10, quantity: 1,},
  ];


*/

/*
let cart = [];
const cartList = document.getElementById('hello');
const cartCount = document.getElementById('c');
const totalPriceElement = document.getElementById('total-price');

function add(bookName) {
    // Find the book element in the DOM
    const bookElement = Array.from(document.querySelectorAll('.img')).find(element => 
        element.querySelector('strong').innerText === bookName
    );
    
    // Get the image src and price
    const bookImgSrc = bookElement.querySelector('img').src;
    const bookPrice = bookElement.querySelector('p:nth-of-type(2)').innerText;

    // Create a cart item
    const cartItem = {
        name: bookName,
        imgSrc: bookImgSrc,
        price: bookPrice
    };

    // Add the item to the cart
    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    // Clear the current cart list
    cartList.innerHTML = '';

    // Add each item to the cart
    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px; height: auto;">
            <span>${item.name} - ${item.price}</span>
        `;
        cartList.appendChild(cartItemElement);
    });

    // Update total items count
    cartCount.textContent = cart.length;
    totalPriceElement.textContent = `RS ${totalPrice}`;
}

    function remove(bookName) {
        // Find the index of the book to remove
        const index = cart.findIndex(item => item.name === bookName);
        if (index > -1) {
            // Remove the book from the cart
            cart.splice(index, 1);
            updateCart();
        }
    }

    */





let cart = [];
const cartList = document.getElementById('hello');
const cartCount = document.getElementById('c');
const totalPriceElement = document.getElementById('total-price');

function add(bookName) {
    // Find the book element in the DOM
    const bookElement = Array.from(document.querySelectorAll('.img')).find(element => 
        element.querySelector('strong').innerText.trim() === bookName
    );

    // Ensure bookElement exists
    if (!bookElement) {
        console.error('Book element not found!');
        return;
    }

    // Get the quantity input value
    const quantityInput = bookElement.querySelector('.quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value, 10) : 1;

    // Get the image src and price
    const bookImgSrc = bookElement.querySelector('img').src;
    const bookPriceText = bookElement.querySelector('p:nth-of-type(2)').innerText;
    const bookPrice = parseInt(bookPriceText.replace('RS ', ''), 10);

    // Create a cart item
    const cartItem = {
        name: bookName,
        imgSrc: bookImgSrc,
        price: bookPrice,
        quantity: quantity
    };

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.name === bookName);
    if (existingItemIndex !== -1) {
        // Update the existing item quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add the new item
        cart.push(cartItem);
    }

    updateCart();
}

function updateCart() {
    // Clear the current cart list
    cartList.innerHTML = '';

    // Calculate the total price
    let totalPrice = 0;

    // Add each item to the cart
    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;
        cartItemElement.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px; height: auto;">
            <span>${item.name} - RS ${item.price} x ${item.quantity} = RS ${itemTotalPrice}</span>
            <input type="button" value="Remove" onclick="remove('${item.name}')">
        `;
        cartList.appendChild(cartItemElement);
    });

    // Update total items count
    cartCount.textContent = cart.length;
    totalPriceElement.textContent = `RS ${totalPrice}`;
}

function remove(bookName) {
    // Find the index of the book to remove
    const index = cart.findIndex(item => item.name === bookName);
    if (index > -1) {
        // Remove the book from the cart
        cart.splice(index, 1);
        updateCart();
    }
}
