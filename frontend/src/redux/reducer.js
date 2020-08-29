const INITIAL_STATE = {
    records : [] ,
    selectedItem : {},
    defaultTime : 9   
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
            records: [...state.records,action.value]
        }
        case "DELETE_RECORD":
        
        return {
            ...state,
            records: state.records.filter(record => record._id!==action.value._id)
        }
        case "UPDATE_RECORD":
        
        return {
            ...state,
            records: [...state.records.filter(record => record.date!==action.value.date), action.value]

        }    
        case "SELECT_ITEM":
        
            return {
                ...state,
                selectedItem: action.value
            }      
    
        default:
            return state
    }
    
}

export default reducer;