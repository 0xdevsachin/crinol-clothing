import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, decreaseCart, removeItem } from "../../redux/action/cart";
import './checkout.css'
const CheckOut = () =>{
    const dispatch = useDispatch();
    const data = useSelector(state => state.cartReducer.cartItems)
    var ans = 0;
    return (
        <div className="checkout-item">
            <div className="checkout-header">
                <div>
                    <span>Product</span>
                </div>
                <div>
                    <span>Description</span>
                </div>
                <div>
                    <span>Quantity</span>
                </div>
                <div>
                    <span>Price</span>
                </div>
                <div>
                    <span>Remove</span>
                </div>
            </div>
            <div className="hr" />
            {
                data.length ?
                <>
                <div className="items-list">
                {
                    data.map(items =>{
                        ans += items.quantity * items.price
                        return (
                            <div key={items.id}>
                            <div className="checkout-header" >
                                <div>
                                    <img src={items.imageUrl} alt="checkout-imag" />
                                </div>
                                <div>
                                    <span className="qname">{items.name}</span>
                                </div>
                                <div>
                                    <span className="pointer" onClick={() => dispatch(decreaseCart(items))}> &#8249; </span>
                                    <span>{items.quantity}</span>
                                    <span className="pointer" onClick={() => dispatch(addtoCart(items))}> &#8250; </span>
                                </div>
                                <div>
                                    <span>{items.price}&#36;</span>
                                </div>
                                <div>
                                    <span className="pointer" onClick={()=> dispatch(removeItem(items))}>X</span>
                                </div>
                            </div>
                            <hr className="hr" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="total"> Total : { ans }&#36; </div>
            </>
            :
            <div className="checkout-header empty">
                Your Cart is Empty
            </div>
            }
        </div>
    )
}

export default CheckOut;