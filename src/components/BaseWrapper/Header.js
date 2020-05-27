import React, { useState } from 'react'
import {withRouter} from 'react-router'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const Header = ({history:{push}, location:{pathname}}) => {
    const [open, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!open)
    const handleChangePage = (location) => location && push(`${location}`)
    const setActive = (path) => pathname === path ? 'active' : ''
    return (
    <Container className="header-container" fluid={true}>
        <div className="logo link" onClick={()=>push('/')} >
            <div className="circle"/>
        </div>
      <Navbar light expand="md" style={{float:"right"}} className="link">
        <NavbarToggler onClick={()=>handleToggle()} />
            <Collapse isOpen={open} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink className={setActive('/')} onClick={()=>handleChangePage('/')}>Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className={setActive('/about')} onClick={()=>handleChangePage('/about')}>About Us</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className={setActive('/contact')} onClick={()=>handleChangePage('/contact')}>Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </Container>
    )
}

export default withRouter(Header)