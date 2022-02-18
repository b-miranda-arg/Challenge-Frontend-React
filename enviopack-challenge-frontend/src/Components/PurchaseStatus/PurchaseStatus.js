import React,{useState} from 'react';
import { connect } from "react-redux";
import "./PurchaseStatus.scss";
import { withRouter } from 'react-router-dom';
const PurchaseStatus = (props)=>{
    
    const {totalPrice}=props
   

    const returnCatalog=()=>{
        props.history.push('/')
    }
    const returnCart=()=>{
        props.history.push('/cart')
    }

    const renderResult = ()=>{
        if(totalPrice >= 0){
            return (
                <div className='purchase-status__purchase-accepted'>
                    <div className='purchase-status__title-accepted'>
                        La compra se realizó con éxito
                    </div>
                    <button onClick={()=>returnCatalog()} className='purchase-status__button-catalog'>
                        Volver al catálogo
                    </button>
                </div>
            )
        }else{
            return(
            <div className='purchase-status__purchase-rejected'>
                <div className='purchase-status__title-rejected'>
                    Ocurrio un error con la compra, revisá que el importe no supere
                    el crédito disponible en tu cuenta
                </div>
                <button onClick={()=>returnCart()} className='purchase-status__button-cart'>
                    Volver al carrito
                </button>
            </div>
            )
        }  
    }


    return (

        <div className='purchase-status'>
            <div className='purchase-status__title'>
                Estado de la compra

            </div>
            {renderResult()}

        </div>
    )

}
const mapStateToProps = (state, ownProps) => {
  
    return {
        profile : state.userProfile.profile,
        totalPrice:state.cart.totalPrice,     
    };
  };

export default withRouter(connect(mapStateToProps,null)(PurchaseStatus));