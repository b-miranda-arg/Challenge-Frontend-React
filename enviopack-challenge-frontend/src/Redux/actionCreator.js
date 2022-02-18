import {ADD_TO_CART,REMOVE_FROM_CART,GET_PRODUCTS,GET_PROFILE,DIFFERENCE,REMOVE_ITEM,ORDER_CATALOG} from '../Redux/actionType';
import * as catalog from '../Json-products/Products'
import * as profile from '../Json-products/Profile'

export const getProducts = ()=>({
    type : GET_PRODUCTS,
    payload:{
        catalog,
    },
});

export const getProfile = ()=>({
    type : GET_PROFILE,
    payload:{
        profile,
    },
});


export const addToCart = (productSku)=>({
    type : ADD_TO_CART,
    payload:{
        productSku,
    },
});

export const orderCatalog = (order)=>({
    type : ORDER_CATALOG,
    payload:{
        order,
    },
});

export const addDifference = (userCredit,priceSum)=>{
    const rest = userCredit - priceSum

    return{
        type : DIFFERENCE,
        payload:{
            rest,
        },
    }
}
export const addRemove = (totalPrice,priceSum)=>{

    const suma = totalPrice+priceSum
    return{
        type : REMOVE_ITEM,
        payload:{
            suma,
        },
    }
}

export const removeToDo = (productSku,cartItems)=>{
    const arrayOfProducts = cartItems.filter((item)=>item !== productSku)
 
return{
    type:REMOVE_FROM_CART,
    payload:arrayOfProducts,
    }
}

