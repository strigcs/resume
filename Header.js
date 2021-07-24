import React, { Component } from 'react'
import { 
    Nav,
    Navbar,
    Container,
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Second from '../Pages/second'
import strigcs from '../Components/strigcs.jpg'
import Third from '../Pages/third'
import Fourth from '../Pages/fourth'
import Fifth from '../Pages/fifth'

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={strigcs}
                        height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">О себе</Nav.Link>
                            <Nav.Link href="/2">Больше информации</Nav.Link>
                            <Nav.Link href="/3">Мои контактные данные</Nav.Link>
                            <Nav.Link href="/4">Характеристика Моего ПК</Nav.Link>
                            <Nav.Link href="/5">Связаться</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/2" component={Second}/>
                    <Route exact path="/3" component={Third}/>
                    <Route exact path="/4" component={Fourth}/>
                    <Route exact path="/5" component={Fifth}/>
                </Switch>
            </Router>
            </>
        );
    }
}
