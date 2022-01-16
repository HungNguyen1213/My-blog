import React, {useState} from 'react'
import {Route, Switch, Link, useHistory, useRouteMatch} from 'react-router-dom'

import PostForm from './admin_component/PostForm'
import ComicForm from './admin_component/ComicForm'
import BeautifulGirlsForm from './admin_component/BeautifulGirlsForm'

const AdminHome = () => {
    const [sidebarData] = useState([
        {
            id: 0,
            title: "Post management",
            url: "/admin/post",
            component: <PostForm/>
        },
        {
            id: 1,
            title: "Comic Management",
            url: "/admin/comic",
            component: <ComicForm/>
        },
        {
            id: 2,
            title: "Beautiful Girl Management",
            url: "/admin/beautiful-girls",
            component: <BeautifulGirlsForm/>
        }
    ])
    let history = useHistory()
    let logout = () => {
        localStorage.removeItem("accessToken")
        history.replace("/admin")
    }
    return(
        <div className="admin-home">
            <ul>
                {
                    sidebarData.map(item => (<Sidebar item={item} key={item.id} />))
                }
            </ul>
            <button onClick={logout}>Logout</button>
            <hr/>
            <Switch>
                {
                    sidebarData.map(item => (
                        <Route path={item.url} key={item.id}>{item.component}</Route>
                    ))
                }
            </Switch>
        </div>
    )
}

export default AdminHome

const Sidebar = ({item}) => {
    let match = useRouteMatch({
        path: item.url
    })
    return(
        <li>
            {match ? "Active" : ""}
            <Link to={item.url}>{item.title}</Link>
        </li>
    )
}