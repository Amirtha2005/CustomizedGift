<<<<<<< HEAD

import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const Product1Context = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [favItems, setFavItems] = useState([]);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        const data = await response.json();
        setProducts(data);

        const cart = {};
        const review = {};
        data.forEach((product) => {
          cart[product.id] = 0;
          review[product.id] = [];
        });
        setCartItems(cart);
        setReviews(review);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);
=======
// import React, { createContext, useState } from 'react';
// import  {FRAME}  from '../components/Frame';

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < FRAME.length+1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// export const Product1Context = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = FRAME.find((product) => product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.price;
//       }
//     }
//     return totalAmount;
//   };

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]  + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };
  
//   const updatecartitem=(newamount,itemid)=>{
//     setCartItems((prev)=>({...prev,[itemid]:newamount}))
//   }

//   const contextValue = { cartItems, addToCart, removeFromCart,updatecartitem,getTotalCartAmount };



//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';
import { FRAME } from '../components/Frame';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < FRAME.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Product1Context = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [favItems, setFavItems] = useState([]);
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
<<<<<<< HEAD
        let itemInfo = products.find((product) => product.id === Number(item));
=======
        let itemInfo = FRAME.find((product) => product.id === Number(item));
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const toggleFavorite = (itemId) => {
    setFavItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

<<<<<<< HEAD
  const addReview = (itemId, review) => {
    setReviews((prev) => ({ ...prev, [itemId]: [...prev[itemId], review] }));
  };

  const contextValue = {
    products,
=======
  const contextValue = {
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
    favItems,
    toggleFavorite,
<<<<<<< HEAD
    reviews,
    addReview,
=======
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
<<<<<<< HEAD

export { Product1Context };
=======
>>>>>>> 32c962d494cf8cd29227d09cbf5b1af7c2dbd723
