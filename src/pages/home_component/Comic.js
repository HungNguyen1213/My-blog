import React, { useState, useEffect } from 'react'
import { useLocation, Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import Pagination from './components/Pagination'

import './css/comic.css'

function Comic() {
    const [listComic, setListComic] = useState([])
    const [currentPage, setCurrentPage] = useState()
    const [totalPages, setTotalPages] = useState()
    
    const {search} =  useLocation()

    useEffect(() => {
        const params = new URLSearchParams(search)
        const page = parseInt(params.get("page")) || 1
        const size = 3
        if(page !== currentPage){
            axios.get(`http://localhost:8000/comic-api/${page}/${size}`).then(
                res => {
                    setListComic(res.data.listComic)
                    setCurrentPage(res.data.currentPage)
                    setTotalPages(res.data.totalPages)
                }
            )
        }
    })

    return (
        <div className="comic">
            <div className="content">
                <div className="row">
                    {
                        listComic.map((item, index) => (
                            <ComicItem item={item} key={index}/>
                        ))
                    }
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages}/>
            </div>
        </div>
    )
}

export default Comic

const ComicItem = ({item}) => {
    let {url} = useRouteMatch()
    return(
        <div className="col-12 col-md-4 comic-item">
            <Link to={`${url}/${item.codeName}`}>
                <img src={item.imgUrl} alt="Comic"/>
                <h5 className="title-comic">{item.title}</h5>
            </Link>
        </div>
    )
}