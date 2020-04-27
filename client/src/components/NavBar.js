import React, { Component } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

class NavBar extends Component {
    state={
        isOpen:false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar dark expand="lg" color="dark" className="mb-5 navigationBar">
                        <Container>
                        <NavbarBrand href="/">
                            <h3 className="BrandNav">
                                Money Manager
                            </h3>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="http://github.com/KavinJ619">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;