import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'

import Pagination from './components/Pagination'

import './css/post.css'

function Post() {
    const [listPosts, setListPosts] = useState([])
    const [currentPage, setCurrentPage] = useState()
    const [totalPages, setTotalPages] = useState()
    const {search} = useLocation()
    useEffect(() => {
        const params = new URLSearchParams(search)
        const page = parseInt(params.get('page')) || 1
        const size = 3
        if(page !== currentPage){
            axios.get(`http://localhost:8000/post-api/${page}/${size}`).then(
                res => {
                    setListPosts(res.data.listPosts)
                    setTotalPages(res.data.totalPages)
                    setCurrentPage(res.data.currentPage)
                }
            )
        }
    })
    return (
        <div className="post">
            <div className="content">
                {
                    listPosts.map((post, index) => (
                        <Item post={post} key={post.id} index={index + 1} />
                    ))
                }
                <Pagination currentPage={currentPage} totalPages={totalPages}/>
            </div>
        </div>
    )
}

export default Post

const Item = ({post, index}) => {
    return(
        <>
            { index % 2 !== 0 &&
                <div className="post-1 row">
                    <div className="post-content col-12 col-lg-6">
                        <div>{parse(post.content)}</div>
                    </div>
                    <div className="post-img col-12 col-lg-6">
                        <img src={post.imgUrl} alt="Post img"/>
                    </div>
                </div>
            }
            
            { index % 2 === 0 &&
                <div className="post-2 row">
                    <div className="post-img col-12 col-lg-6">
                        <img src={post.imgUrl} alt="Post img"/>
                    </div>
                    <div className="post-content col-12 col-lg-6">
                        <div>{parse(post.content)}</div>
                    </div>
                </div>
            }
        </>
    )
}