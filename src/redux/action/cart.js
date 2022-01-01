export const toogleCart = () =>{
    return (dispatch) =>{
        dispatch({
            type : "TOOGLE_CART"
        })
    }
}


export const addtoCart = (items)=>{
    return (dispatch) =>{
        dispatch({
            type : "ADD_TO_CART",
            payload : items
        })
    }
}
