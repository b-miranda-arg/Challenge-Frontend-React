import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {connect } from 'react-redux';

import "./Nav.scss";

const Nav = ({catalog,cartItems})=>{



    return(
        <nav className='nav'>
            <div className='nav__link-home' >
                <h3>Tiendas de productos</h3>
            </div>
            
            <div className='nav__user-information'>
                <h3>nombre-apellido</h3>
                <h3>Carrito(1)</h3>
                <h3>Credito $50000</h3>
            </div>        
        </nav>

    )
}
const mapStateToProps = (state, ownProps) => {
    console.log("state: ", state);
    return {
        catalog: state.cart.catalog,
        cartItems: state.cart.cartItems,
    };
  };


export default connect(mapStateToProps)(Nav);