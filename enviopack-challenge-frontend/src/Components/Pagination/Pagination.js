import React from 'react';
import "./Pagination.scss";
const Pagination = ({postsPerPage, totalPosts , paginate})=>{

    const pageNumber =[]

    for (let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i)
    }

    return (
        <nav className='nav-pagination'>
            <ul className='nav-pagination__ul'>
                {pageNumber.map((number)=>
                    <li key={number}>
                        <a className='nav-pagination__a' onClick={()=>paginate(number)}>
                            {number}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )

}

export default Pagination;