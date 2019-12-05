import React from 'react';
import {Card, Container, Col, Row, Button} from 'react-bootstrap';
import Title from '../UI/Title';
import './style.css';

const PriceCard = (props) => {
    console.log("PriceCard",props);
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Total</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>${props.currentPrice}</h2>
                </Col>
            </Row>
            <Row>
                <Col><Button>Concluir</Button></Col>
                <Col><Button variant="danger" onClick={props.handleCurrentItemsReset}>Cancelar</Button></Col>
            </Row>
        </Container>
    )
}

export default PriceCard;