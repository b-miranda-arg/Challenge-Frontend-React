import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {connect } from 'react-redux';
import {getProfile}from '../../Redux/actionCreator'

import "./Nav.scss";

const Nav = ({profile,onGetProfile,cartItems,totalPrice})=>{

    useEffect(()=>{
        onGetProfile()
    },[])
    const userProfile = profile?.PROFILE?.profile
    

    return(
        <nav className='nav'>
            <div className='nav__link-home' >
                <h3>Tiendas de productos</h3>
            </div>
            
            <div className='nav__user-information'>
                <h3 className='nav__name'>{`${userProfile?.username} - ${userProfile?.lastName}`}</h3> 
                <h3 className='nav__cart'>Carrito {cartItems.length}</h3>
                <h3>{totalPrice}</h3>
            </div>        
        </nav>

    )
}
const mapStateToProps = (state, ownProps) => {
    
    return {
        profile : state.userProfile.profile,
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.totalPrice
    };
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetProfile: () => dispatch(getProfile()),
      
    };
  };


export default connect(mapStateToProps,mapDispatchToProps)(Nav);