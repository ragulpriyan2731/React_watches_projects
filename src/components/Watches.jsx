import React from 'react'
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
  return (
    <div className='productlist'>
    {productLists.map((product) => (
    <div key ={product.id}>
    <img src={product.img} alt={product.name} width="250" />
    <h3>{product.name}</h3>
    <p>₹{product.costs}</p>
    <button className="buy-btn" 
    disabled={product.soldout === true}
    onClick={Watches}>{product.soldout === true ? "Not Available" : "Buy Product"}</button>
    <p>{product.stock >0 ? "Available" :"Out of Stock"}</p>
    </div>
))}
    </div>
  )

} 


export default Watches