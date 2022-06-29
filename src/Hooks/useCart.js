import { useEffect, useState } from 'react';
import data from "../Components/data";
import { getProduct } from '../Utilities/AddTodb';

const useCart = () => {
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const storeCart = getProduct()
        let newProduct = []

        for (const id in storeCart) {
            const addedCart = data.find(d => d.id == id)
            if(addedCart){
                const quantity = storeCart[id]
                addedCart.quantity = quantity;
                newProduct.push(addedCart)
            }
            
        }
        setCart(newProduct)
        
    },[])


    return [cart,setCart]
};

export default useCart;