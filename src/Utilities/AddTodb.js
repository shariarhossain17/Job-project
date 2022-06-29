const addToStorage = (id,price) => {
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

// add decrease
const addToStorageDecrease = (id) => {
    let shoppingItem = {}
    const sortCart = localStorage.getItem("shopping-Cart")
    if(sortCart){
        shoppingItem = JSON.parse(sortCart)
    }

    // decrease
    const quantity = shoppingItem[id];
    if(quantity > 0){
        
        const newQuantity = quantity - 1; 
        shoppingItem[id] = newQuantity;
    }
    else{
        shoppingItem[id] = 1;
    }

    localStorage.setItem("shopping-Cart", JSON.stringify(shoppingItem))
}



// add price
const addToPrice = (id,price) => {
    let shoppingItem = {}
    const sortCart = localStorage.getItem("shopping-Cart")
    if(sortCart){
        shoppingItem = JSON.parse(sortCart)
    }

    // addedItem 
    const quantity = shoppingItem[id]
    if(quantity){
        const newQuantity = quantity * price; 
        shoppingItem[id] = newQuantity;
    }
    else{
        shoppingItem[id] = 1;
    }

    localStorage.setItem("shopping-price", JSON.stringify(shoppingItem))
}

//  decrease price
const addToPriceDecrease = (id,price) => {
    let shoppingItem = {}
    const sortCart = localStorage.getItem("shopping-Cart")
    if(sortCart){
        shoppingItem = JSON.parse(sortCart)
    }

    // addedItem 
    const quantity = shoppingItem[id]
    if(quantity > 0){
        const newQuantity = quantity * price; 
        shoppingItem[id] = newQuantity;
    }
    else{
        shoppingItem[id] = price;
    }

    localStorage.setItem("shopping-price", JSON.stringify(shoppingItem))
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
const getTotalPrice = () => {
    let shoppingItem = {}
    const sortCart = localStorage.getItem("shopping-price")
    if(sortCart){
        shoppingItem = JSON.parse(sortCart)
    }
    return shoppingItem

}



export { addToStorage, getProduct, addToPrice, addToStorageDecrease, addToPriceDecrease, getTotalPrice }

