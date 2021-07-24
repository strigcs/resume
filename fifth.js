import React, { Component } from 'react'
import '../Components/joe.css'
import { Form, Container, Button } from 'react-bootstrap'

export default class fifth extends Component {
    render() {
        return (
            <Container>
                <h1 className="text-center">Вы можете написать мне на почту</h1>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Напишите своё сообщение</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Отправить</Button>
                </Form>
            </Container>
        )
    }
}
