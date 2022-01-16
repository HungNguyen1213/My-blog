import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap'
import { Link, useRouteMatch } from 'react-router-dom'


const TopNav = () => {
    const navItem = [
        {
            page: "Home",
            path: "/home"
        },
        {
            page: "Relax",
            path: "/relax"
        },
        {
            page: "About",
            path: "/about"
        }

    ]
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <div className="top-nav">
            <Navbar light expand="md">
                <NavbarToggler onClick={handleClick} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto flex-row flex-wrap" navbar>
                        {
                            navItem.map((item, index) => (
                                <Item item={item} key={index}/>
                            ))
                        }
                        <NavItem className="col-6 col-md-auto">
                            <a href="https://github.com/HungNguyen1213" target="blank">GitHub</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
  )
}

export default TopNav

const Item = ({item}) => {
    let match = useRouteMatch({
        path : item.path,
        exact: true
    })
    return(
        <NavItem className="col-6 col-md-auto">
            <Link to={item.path} className={match ? "active" : ""}>{item.page}</Link>
        </NavItem>
    )
}