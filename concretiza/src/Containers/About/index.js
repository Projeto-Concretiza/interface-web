import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../Components/UI/Title';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Title title={"Sobre"}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Container>
                        <Row>
                            <Col>
                                <p>Com muito carinho, da equipe Massa, para a Disensa Alicerce
                                e todos seus colaboradores.</p>
                            </Col>
                        </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}