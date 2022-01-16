import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './home_component/components/Header'
import Footer from './home_component/components/Footer'
import Title from './home_component/components/Title'

import Comic from './home_component/Comic'
import Post from './home_component/Post'
import Relax from './home_component/Relax'
import About from './home_component/About'
import BeautifulGirls from './home_component/BeautifulGirls'
import ComicListChap from './home_component/ComicListChap'

import './home_component/css/home.css'

const Home = () => {
    const tabs = [
        {
            name: "Story",
            path: "/home",
            component: <Post/>
        },
        {
            name: "Relax",
            path: "/relax",
            component: <Relax/>
        },
        {
            name: "About",
            path: "/about",
            component: <About/>
        },
        {
            name: "Comic",
            path: "/relax/comic",
            component: <Comic/>
        },
        {
            name: "Beautiful Girls",
            path: "/relax/beautiful-girls",
            component: <BeautifulGirls/>
        },
        {
            name: "Comic List Chap",
            path: "/relax/comic/:code",
            component: <ComicListChap/>
        }
    ]
    return(
        <div>
            <Header/>
            <Switch>
                {
                    tabs.map((tab, index) => (
                        <Route path={tab.path} key={index} exact>
                            <Title name={tab.name} />
                            {tab.component}
                        </Route>
                    ))
                }
            </Switch>
            <Footer/>
        </div>
    )
}
export default Home