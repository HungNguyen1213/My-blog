import React, {useState, useEffect} from 'react'
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import {useParams, useLocation, Link, useRouteMatch} from 'react-router-dom'
import axios from 'axios'

import Pagination from './components/Pagination'

import './css/comicListChap.css'

const ComicListChap = () => {
    const [listChapter, setListChapter] = useState([])
    const [currentPage, setCurrentPage] = useState()
    const [totalPages, setTotalPages] = useState()
    const {code} = useParams()
    const {search} = useLocation()
    useEffect(() => {
        const params = new URLSearchParams(search)
        const page = parseInt(params.get('page')) || 1
        const size = 12
        if(page !== currentPage){
            axios.get(`http://localhost:8000/chapter-api/${code}/${page}/${size}`).then(
                res => {
                    setListChapter(res.data.listChapter)
                    setCurrentPage(res.data.currentPage)
                    setTotalPages(res.data.totalPages)
                }
            )
        }
    })
    return( 
        <div className="comic-list-chap">
            <div className="content">
                <div className="row">
                    {
                        listChapter.map(item => (
                            <ComicCard item={item} key={item.id}/>
                        ))
                    }
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages}/>
            </div>
        </div>
    )
}

export default ComicListChap

const ComicCard = ({item}) => {
    let {url} = useRouteMatch()
    return(
        <div className="col-4 col-md-2 item">
            <Card>
                <CardImg top width="100%" src={item.imgUrl} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">Chap {item.numOfChap}</CardTitle>
                <CardText>{item.title}</CardText>
                <Link to={`${url}/${item.numOfChap}`} className="btn btn-secondary">Read</Link>
                </CardBody>
            </Card>
        </div>
    )
}
