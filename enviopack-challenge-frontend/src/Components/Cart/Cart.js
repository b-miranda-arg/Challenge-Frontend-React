import React from 'react';
import { connect } from "react-redux";

const Cart = ({cartItems,catalog})=>{

    console.log( 'asi me muestra el catalogo', )
    
    return (
        <div className='cart'>
            {cartItems&&cartItems.map((items)=>{

                let nombre = catalog.PRODUCTS.productos.filter((product)=> product.sku === items)
                
                return(
                    console.log('data del producto que va en el carrito',nombre)
                )

            })}
            este es el carrito de compra
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
      cartItems: state.cart.cartItems,
      catalog: state.cart.catalog,       
    };
  };
export default connect(mapStateToProps,null) (Cart)