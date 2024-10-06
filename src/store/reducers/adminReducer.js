
import actionTypes from '../actions/actionTypes';  

const initialState = {  
    isLoadingGender: false,  
    genders: [],  
    roles: [],  
    positions: []  
}  

const adminReducer = (state = initialState, action) => {  
    let copyState = { ...state };  

    switch (action.type) {  
        case actionTypes.FETCH_GENDER_START:  
            copyState.isLoadingGender = true;  
            return {  
                ...copyState  
            }  

        case actionTypes.FETCH_GENDER_SUCCESS:  
            state.genders = action.data;  
            state.isLoadingGender = false;  

            return {  
                ...state  
            }  

        case actionTypes.FETCH_GENDER_FAILED:  
            copyState.isLoadingGender = false;  
            copyState.genders = [];
            return {  
                ...state 
            }  

        case actionTypes.FETCH_POSITION_SUCCESS:  
            state.positions = action.data;  
            return {  
                ...state  
            }  

        case actionTypes.FETCH_POSITION_FAILED:  
            copyState.positions = [];
            return {  
                ...state 
            } 

        case actionTypes.FETCH_ROLE_SUCCESS:  
            state.roles = action.data;  
            return {  
                ...state  
            }  

        case actionTypes.FETCH_ROLE_FAILED:  
            copyState.roles = [];
            return {  
                ...state 
            } 

        default:  
            return state;  
    }  
}  

export default adminReducer;