// import React, {useState} from 'react'
// import { useContext } from 'react';
// import Cart from '../components/Cart';
// export const CartContext = React.createContext([]); 
// export const useCartContext = () => useContext(CartContext);


// export default function CartProvider({Children}) {
//     const [cart,setCart] = useState([]);

// const addProduct = (item, quantity) => {
//     if (isInCart(item.id)){
//         setCart(cart.map(product => {
//             return product.id === item.id ? {...product,quantity: product.quantity + quantity } : product
//         }));
//     }   else {
//         setCart([...cart, {...item, quantity}]);
//     }
// }
//     const totalPrice = () => {
//         return Cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
//     }
//     const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
//     const clearCart = () => setCart([]);
//     const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
//     const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

//   return (
//     <CartContext.Provider value={{
//         clearCart,
//         isInCart,
//         removeProduct,
//         addProduct,
//         totalPrice,
//         totalProducts,
//         cart
//     }}>
//         {Children}
//     </CartContext.Provider>
//   )
// }

import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './Reducers';


const electro = [
    {id:1 , title:"Vestido De Paracaídas Con Lazo En La Cintura", Image: "https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4050-500x750.jpg", category:"vestidos", price:"20.000", inStock:([10]) },
    {id:2, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P3518-500x750.jpg", title:"Vestido De Vacaciones - Patrulla", category:"vestidos",  price:"30.000", inStock:([10])  },
    {id:3, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4353-500x750.jpg", title:"Un Vestido Informal", category:"vestidos" , price:"10.000", inStock:([10]) },
    {id:4, Image:"https://imagenes.elpais.com/resizer/gmYm28EfIbdmOZHo2xNRgvx3YH8=/1200x0/filters:focal(209x290:219x300)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2GOIWHMMHNFUNGKRSUACWF2YLI.png", title:"Mini Bolsa De Hombro Transversal Para Celulares + Ropa", category:"combos",  price:"25.000", inStock:([0]) },
  ];

const Cart = createContext()

export default function Context({children})  {

   

    const [state, dispatch] = useReducer (cartReducer, {
        products: electro,
        cart: [],
      });

    return (
          <Cart.Provider value={{ state, dispatch}}> { children } </Cart.Provider>
          )
}

export const CartState = () => {
    return useContext(Cart)
}