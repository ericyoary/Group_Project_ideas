import React, {useState} from 'react'
import {Navbar, NavbarToggler, NavbarBrand} from 'reactstrap'
const NavComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=> setIsOpen(!isOpen)
    return (
        <Navbar color='dark' dark expand='md'>
            <div className="container">
                <NavbarBrand className='mr-auto' href='/'>
                    <h3>
                        <i className='fab fa-rentool'></i> RenTool
                    </h3>
                </NavbarBrand>
            </div>
        </Navbar>
    )
}

export default NavComponent