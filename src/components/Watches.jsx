import React, { useState } from 'react'
import images1 from '../assets/watch 1.jpg'
import images2 from '../assets/watch 2.jpg'
import images3 from '../assets/watch 3.jpg'
import images4 from '../assets/watch 4.jpg'
import images5 from '../assets/watch 5.jpg'
import images6 from '../assets/watch 6.jpg'
import '../components/Styles.css'


function Watches() {
    const productLists = [{
        id: 1,
        name: "Rolex submariner",
        costs: '1,544',
        stock: 8,
        soldout:false,
        img: images1
    },
    {
        id:2,
        name: "Apple Watch",
        costs: '1,754',
        stock: 0,
        soldout:true,
        img: images2  
    },
    {
        id:3,
        name: "Casio G-shock",
        costs: '1,900',
        stock: 5,
        soldout:false,
        img: images3

    },
    {
        id:4,
        name: "Fossil Gen 6",
        costs: '1,349',
        stock: 9,
        soldout:false,
        img: images4
    },
    {
        id:5,
        name: "Titan Analog",
        costs: '1,899',
        stock: 6,
        soldout:false,
        img: images5
    },
    {
        id:6,
        name: "Sonata Digital",
        costs: 2000,
        stock: 0,
        soldout:true,
        img: images6
    }
]
// Logic for shop hours
const hour = new Date() .getHours();
const openHour = 9;
const closeHour = 20;
const isOpen = hour >= openHour && hour < closeHour

// state initialization
// create an object where keys are product id and values are stock
// example state: {1: 8, 2: 0, 3: 5, 4: 9, 5: 6, 6: 0}
const [quantity, setQuantity] = useState(
productLists.reduce((acc, product) => {
acc[product.id]=product.stock;
return acc;
}, {})
);
// handle function
const increment = (id, maxstock) => {
setQuantity(prev => ({
    ...prev,
    [id]: prev[id] < maxstock ? prev[id] + 1 : prev[id]
}));
};
const decrement = (id) => {
setQuantity(prev => ({
    ...prev,
    [id]: prev[id] > 0 ? prev[id] -1 : 0
}));

};
    const customerNmae = "Ragul priyan"
    const buyFunction = (name) => alert (`Successfully Ordered: ${name} 
    Thank you for your order ${customerNmae}!
    Shop again...`);

return (
    <div className='shop-container'>
        <h1>Watch Shopping Cart</h1>
    {productLists.length > 0 ? (
    <div className='productlist'>
    {productLists.map((product) => (
    <div key ={product.id} className={`card ${product.soldout ? "sold-out" : ""}`}>
    <img src={product.img} alt={product.name} width="250" />
    <h3>{product.name}</h3>
    <p>Price: ₹{product.costs}</p>
    {/* Quantity Controls */}
              <div className="stocks">
                <button onClick={() => decrement(product.id)} disabled={quantity[product.id] <= 0}>-</button>
                <span> Stocks: {quantity[product.id]} </span>
                <button onClick={() => increment(product.id, product.stock)} disabled={quantity[product.id] >= product.stock}>+</button>
              </div>
    {/* Buy Button */}
<button className="buy-btn" 
    disabled={product.soldout || !isOpen}
    onClick={ () => buyFunction(product.name)}>
    {product.soldout ? "Out of Stock" : "Buy Product"}</button>
    </div>
))}
    </div>
  ) : (
    <p className='noData'>No pooduct found.</p>
  )}
  {/* Footer Status */}
      <p className="status">
        {isOpen 
          ? "We are Open! (10 AM - 8 PM)" 
          : "Sorry, we are Closed. Opens at 10 AM"}
      </p>
    </div>
  );
}

 


export default Watches