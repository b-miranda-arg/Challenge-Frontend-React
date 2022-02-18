import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, getProducts, orderCatalog } from '../../Redux/actionCreator'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import "./Catalog.scss";


const Catalog = ({
    catalog,
    cartItems,
    onGetProducts,
    onAddToCart,
    onOrder,
    orderCatalog

}) => {

    const [text, setText] = useState('');
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6)
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = products.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {

        onGetProducts();


    }, []);

    useEffect(() => {

        setProducts(catalog && catalog.PRODUCTS && catalog.PRODUCTS.productos)


    }, [catalog])

    useEffect(() => {

        setProducts(orderCatalog)


    }, [orderCatalog])

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handlerOnTextChange = (e) => {
        const filterProducts = products.filter((product) => product.title.includes(e.target.value));
        setProducts(filterProducts);
    }


    const orderBy = (e) => {
        if (e.target.value == 'mas barato') {
            const orderAsc = products?.sort((a, b) => {

                let x = a['price'];
                let y = b['price']

                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
            onOrder(orderAsc)

        } else {
            const orderDesc = products?.sort((a, b) => {

                let x = a['price'];
                let y = b['price']

                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });
            onOrder(orderDesc)

        }
    }



    return (
        <div className='catalog'>
            <div className='catalog__title'>
                <h3>Catálogo</h3>
            </div>

            <div className='catalog__search'>

                <input
                    type='text'
                    placeholder='Buscar productos por nombre'
                    onChange={handlerOnTextChange}
                    className='catalog__searchName'
                />

                <select onChange={orderBy} className='catalog__searcgPrice'>
                    <option disabled selected>Seleccionar</option>
                    <option value='mas barato'>más baratos</option>
                    <option value='mas caro'>más caros</option>

                </select>

            </div>

            <div className='catalog__product'>

                {currentPost.map((item) => (

                    <ProductCard
                        key={item.id}
                        productName={item.title}
                        onAddToCart={onAddToCart}
                        sku={item.sku}
                        price={item.price}
                        inCart={cartItems.includes(item.sku)}
                    />

                ))
                }
            </div>
            <Pagination
                postsPerPage={postPerPage}
                totalPosts={products.length}
                paginate={paginate}
            />

        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        catalog: state.cart.catalog,
        cartItems: state.cart.cartItems,
        orderCatalog: state.cart.orderCatalog
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetProducts: () => dispatch(getProducts()),
        onAddToCart: (productSku) => dispatch(addToCart(productSku)),
        onOrder: (orderedCatalog) => dispatch(orderCatalog(orderedCatalog)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);