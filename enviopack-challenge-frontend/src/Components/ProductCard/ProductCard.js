import React from 'react';
import "./ProductCard.scss";
import image from '../../asset/image-product.jpg';
import { withRouter } from 'react-router-dom';
const ProductCard = (props)=>{
    return (
        <div className='product-card'>
            <div className='product-card__picture-wrapper'>
                <img src={image} alt='img-product' className='product-card__picture'/>
            </div>
            <div className='product-card__title'>
                {props.productName}
            </div>
            <div className='product-card__price'>
              {`$ ${props.price}`} 
            </div>
            {props.inCart?
            (
                <button onClick={()=>props.history.push('/cart')}>
                    Ver carrito
                </button>
            ):
            (
                <button onClick={()=>props.onAddToCart(props.sku)}>
                    Agregar al carrito
                </button>
            )

            }
      
        </div>
    )
}
export default withRouter(ProductCard);