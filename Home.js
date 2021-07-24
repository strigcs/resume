import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import i from '../Components/I.jpg'
import '../Components/joe.css'

export default class Home extends Component {
    render() {
        return (
        <div>
            <img variant="top" class="con"
            src={i}
            height="600"
            width="450"
            />
            <h1 class="ah1">Это я!</h1>
            <h1 class="ah1">Это моё резюме.</h1>
            <a class="butt" href="http://localhost:3000/2"><button class="batu">Больше информации</button></a>
            <a class="butt1" href="http://localhost:3000/3"><button class="batu1">Мои контактные данные</button></a>
        </div>            
        )
    }
}
