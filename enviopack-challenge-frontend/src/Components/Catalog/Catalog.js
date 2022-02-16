import React ,{useEffect, useState} from 'react';
import {connect } from 'react-redux';
import {addToCart,getProducts,removeToDo}from '../../Redux/actionCreator'
import ProductCard from '../ProductCard/ProductCard'
import "./Catalog.scss";


 const Catalog = ({
     catalog,
     cartItems,
     onGetProducts,
     onAddToCart,
     onRemoveToCart
    })=>{

        useEffect(()=>{

            onGetProducts();

        },[])
    

    return (
        <div className='catalog'>
            <div className='catalog__title'>
                <h3>Catálogo</h3>
            </div>

            <div className='catalog__product'>  

            {catalog&&catalog.PRODUCTS&&catalog.PRODUCTS.productos.map((item)=>(

                    <ProductCard
                        key={item.id}
                        productName = {item.title}
                        onAddToCart = {onAddToCart}
                        onRemoveToCart ={onRemoveToCart}
                        sku={item.sku}
                        price={item.price}
                        inCart={cartItems.includes(item.sku)}
                    />

                ))
            }
            </div>

        </div>
    )
 }


 const mapStateToProps = (state, ownProps) => {
    console.log("state: catalogo ", state);
    return {
        catalog: state.cart.catalog,
        cartItems: state.cart.cartItems,
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetProducts: () => dispatch(getProducts()),
        onAddToCart: (productSku) => dispatch(addToCart(productSku)),
        onRemoveToCart: (productSku) => dispatch(removeToDo(productSku)),
    };
  };

  export default  connect(mapStateToProps, mapDispatchToProps)(Catalog);