export const CheckCartItems = (CartItems, CartAddItems) =>{
    const exist = CartItems.find(
        CartItem => CartItem.id === CartAddItems.id
    )

    if(exist){
        return CartItems.map(CartItem =>
            CartItem.id === CartAddItems.id
            ?
            {...CartItem, quantity : CartItem.quantity + 1}
            :
            CartItem
            )
    }
    return [...CartItems, {...CartAddItems, quantity : 1}]
}