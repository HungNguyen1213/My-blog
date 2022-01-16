import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'

import Pagination from './components/Pagination'

import './css/bg.css'

const BeautifulGirls = () => {
    const [listBG, setListBG] = useState([])
    const [currentPage, setCurrentPage] = useState()
    const [totalPages, setTotalPages] = useState()
    const {search} = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(search)
        const page = parseInt(params.get('page')) || 1
        const size = 3
        if(page !== currentPage){
            axios.get(`http://localhost:8000/beautiful-girl-api/${page}/${size}`).then(
                res => {
                    setListBG(res.data.listBGirl)
                    setCurrentPage(res.data.currentPage)
                    setTotalPages(res.data.totalPages)
                }
            )
        }
    })

    return(
        <div className="beautiful-girls">
            <div className="content">
                {
                    listBG.map(bg =>(
                        <BG bg={bg} key={bg.id}/>
                    ))
                }
                <Pagination currentPage={currentPage} totalPages={totalPages}/>
            </div>
        </div>
    )
}
export default BeautifulGirls

const BG = ({bg}) => {
    return(
        <div className="bg">
            <div className="caption">
                {parse(bg.caption)}
            </div>
            <div className="bg-img">
                <img src={bg.imgUrl} alt="bg-img"/>
            </div>
        </div>
    )
}