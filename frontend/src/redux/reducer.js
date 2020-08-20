const INITIAL_STATE = {
    records : []    
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "SET_RECORDS":
            
        return {
            ...state,
            records: action.value
        }
        
        case "ADD_RECORD":
        return {
            ...state,
            records: [...state.records,...action.value]
        }
        case "DELETE_RECORD":
        
        return {
            ...state,
            categoryName: action.value
        }
        case "UPDATE_RECORD":
        
        return {
            ...state,
            categoryName: action.value
        }          
    
        default:
            return state
    }
    
}

export default reducer;