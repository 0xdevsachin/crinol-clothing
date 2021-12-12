// reducer a function that gets two properties
// 1) State {last state or initial state}
// 2) Action 

const INITIAL_STATE = ({
    currentUser : null
})

const userReducer = (state = INITIAL_STATE, action) =>{
    if(action.type === 'SET_CURRENT_USER'){
        return {
            ...state,
            currentUser : action.payload
        }
    }else{
        return state;
    }
}

export default userReducer;