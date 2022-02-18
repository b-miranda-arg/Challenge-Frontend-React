import React,{useEffect, useState} from 'react';
import { connect } from "react-redux";
import {removeToDo,addDifference,addRemove}from '../../Redux/actionCreator'
import productImage from '../../asset/image-product.jpg'
import { withRouter } from 'react-router-dom';
import "./Cart.scss";

const Cart = (props)=>{

   const{cartItems,catalog,onRemoveToCart,onDifference,profile,totalPrice,onAddRemove} = props
    
    const cartProducts = catalog.filter((product)=> cartItems.includes(product.sku));
    
    const priceSum = cartProducts.map((items)=> items.price).reduce((a,b)=>a+b);

    const userCredit = profile.PROFILE.profile.credit;
    

    const PurchaseDetail = ({productName,price,sku,onRemoveToCart })=>{

        const removeItem = ()=>{
            onRemoveToCart(sku,cartItems)
            onAddRemove(userCredit,priceSum)

        }


       return(
            <div className='cart__detail'>
                <div className='cart__picture-wrapper'>
                    <img src={productImage} alt='productImage' className='cart__picture'/>
                </div>
                <div className='cart__product-name'>
                    {productName}
                </div>
                <div className='cart__price-product'>
                    {`$ ${price}`}
                </div> 
                <button className='cart__remove' onClick={()=>removeItem()} >
                    X
                </button>
            </div>
        )
    }

    

        
    
        const pushStatus = ()=>{
            props.history.push('/purchase-status')
            onDifference(userCredit,priceSum)
        }
   

    return (
        
        <div className='cart'>

            <div className='cart__title'>
                Carrito
            </div>
            {cartProducts.map((items)=>{
                return(
                <PurchaseDetail
                    key = {items.id}
                    productName = {items.title}
                    price = {items.price}
                    id = {items.id}
                    sku = {items.sku}
                    onRemoveToCart = {onRemoveToCart}
               />)
                
            })}

            <div className='cart__total'>
                
                <div className='cart__title-total'>
                        Total
                </div>
                <div className='cart__price-total'>
                    {`$ ${priceSum}`}
                </div>
            </div>

            <div  className='cart__buttons'>
                <button onClick={()=> props.history.push('/')} className='cart__button-catalog'>
                    Volver al catálogo
                </button>

                <button onClick={()=>pushStatus()} className='cart__button-finalize'>
                    Finalizar compra
                </button>               
            </div>

        </div>
    )

    
}


const mapStateToProps = (state, ownProps) => {
    return {
        profile : state.userProfile.profile,
        cartItems: state.cart.cartItems,
        catalog: state.cart.catalog.PRODUCTS.productos || [],
        totalPrice:state.cart.totalPrice,       
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveToCart: (productSku,cartItems) => dispatch(removeToDo(productSku,cartItems)),
        onDifference: (userCredit,priceSum) => dispatch(addDifference(userCredit,priceSum)),
        onAddRemove: (userCredit,priceSum) => dispatch(addDifference(userCredit,priceSum)),
    };
  };
export default withRouter( connect(mapStateToProps,mapDispatchToProps) (Cart));