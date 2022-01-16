import React from 'react'
import {Link} from 'react-router-dom'

import './css/pagination.css'

const Pagination = ({currentPage, totalPages}) =>{
    return(
        <div>
            <ul className="pagination justify-content-center">
                <li className={`page-item first-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link to={{ search: `?page=1` }} className="page-link">First</Link>
                </li>
                <li className={`page-item previous-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link to={{ search: `?page=${currentPage - 1}` }} className="page-link">Previous</Link>
                </li>
                <li className={`page-item number-item active`}>
                    <Link to={{ search: `?page=${currentPage}` }} className="page-link">{currentPage}</Link>
                </li>
                <li className={`page-item next-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link to={{ search: `?page=${currentPage + 1}` }} className="page-link">Next</Link>
                </li>
                <li className={`page-item last-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link to={{ search: `?page=${totalPages}` }} className="page-link">Last</Link>
                </li>
            </ul>
        </div>
    )
}

export default Pagination