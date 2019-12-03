import React from 'react';
import {Card, CardImg, Row, Col, Button} from 'react-bootstrap';
import './style.css';

const ProductCard = (props) => {
    return (
        <Card style={{width:'10rem'}}>
            <Card.Img src={props.product.image}/>
            <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Row>
                <Col>
                    <Button className="details-btn">Ver detalhes</Button>
                </Col>
                <Col>
                    <Button>+</Button>
                </Col>
                <Col>
                    <Button>x</Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;