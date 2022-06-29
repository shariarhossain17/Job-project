const addToStorage = id => {
    let shoppingItem = {}
    const sortCart = localStorage.getItem("shopping-Cart")
    if(sortCart){
        shoppingItem = JSON.parse(sortCart)
    }

    // addedItem 
    const quantity = shoppingItem[id]
    if(quantity){
        const newQuantity = quantity + 1; 
        shoppingItem[id] = newQuantity;
    }
    else{
        shoppingItem[id] = 1;
    }

    localStorage.setItem("shopping-Cart", JSON.stringify(shoppingItem))
}


// get item

const getProduct = () => {
    let shoppingItem = {}
    const sortCart = localStorage.getItem("shopping-Cart")
    if(sortCart){
        shoppingItem = JSON.parse(sortCart)
    }
    return shoppingItem

}

const removeItem = id =>{
    
}

export { addToStorage, getProduct }

