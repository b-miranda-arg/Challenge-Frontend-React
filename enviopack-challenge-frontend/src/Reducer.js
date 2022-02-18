import {combineReducers} from 'redux';
import {ADD_TO_CART,REMOVE_FROM_CART,GET_PRODUCTS,GET_PROFILE,DIFFERENCE,REMOVE_ITEM,ORDER_CATALOG} from '../src/Redux/actionType';

const initialState = {
    catalog:{},
    orderCatalog:[],   
    cartItems: [],
    totalPrice:[50000],
    
}

const initialState2 = {
    profile:{},
}

function cart(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
               catalog:{...action.payload.catalog}
             
        };
        case ORDER_CATALOG:
            return {
                ...state,
                orderCatalog:[...action.payload.order]
             
        };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems:[...state.cartItems,action.payload.productSku]
             
        };

        case DIFFERENCE:
            return {
                ...state,
                totalPrice:[action.payload.rest]
             
        };
        case REMOVE_ITEM:
            return {
                ...state,
                totalPrice:[action.payload.suma]
             
        };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:[...action.payload]
            };

        default:
            return state;
    }
  }
  function userProfile(state = initialState2, action) {
    switch (action.type) {
        
        case GET_PROFILE:
           
            return {
                ...state,
                profile:{...action.payload.profile}
             
        };
        default:
            return state;
    }
  }
  export default combineReducers({
    cart,
    userProfile,
  })