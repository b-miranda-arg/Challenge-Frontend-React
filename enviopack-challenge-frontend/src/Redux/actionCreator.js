import {ADD_TO_CART,REMOVE_FROM_CART,GET_PRODUCTS} from '../Redux/actionType';
import * as catalog from '../Json-products/Products'

export const getProducts = ()=>({
    type : GET_PRODUCTS,
    payload:{
        catalog,
    },
});


export const addToCart = (productSku)=>({
    type : ADD_TO_CART,
    payload:{
        productSku,
    },
});

export const removeToDo = (productSku)=>({
    type:REMOVE_FROM_CART,
    payload:{productSku},
})

