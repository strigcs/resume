import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Comp from '../Components/comp.jpg'
import '../Components/joe.css'

export default class fourth extends Component {
    render() {
        return (
            <Container>
                <img class="compu"
                src={Comp}
                />
                <h1>Характеристики моего ПК:</h1>
                <li>NVIDIA GeForse RTX 2060 SUPER</li>
                <li>Intel Core i7-7700 CPU 3.60 GHz</li>
                <li>Logitech G102 LIGHTSYNK</li>
                <li>Logitech G213 PRODIGY</li>
            </Container>
        )
    }
}
