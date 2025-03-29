const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            console.log(action.payload)
            return {
                ...currentState, 
                currentUser: action.payload
            }
        case 'UNSET_USER_INFO':
            return {currentUser: null, ...currentState}
        default:
            return currentState;
    }
}

export default userReducer;