import React from 'react';
import {Card, CardImg, Row, Col, Button, Container} from 'react-bootstrap';
import './style.css';

const ProductCard = (props) => {
    console.log("PCard",props);
    return (
        <Card>
            <Row>
                <Col>
            <Card.Img src={props.product.image}/>
            </Col>
            </Row>
            <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Row>
                <Container>
                <Row>
                    <Col>
                        <Button 
                            id={props.product.id}
                            block
                            className="details-btn">
                                Ver detalhes
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            id={props.product.id}
                            onClick={props.handleSelect}
                            variant="outline-dark"
                            className="add-btn">
                                &#10004;
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                            id={props.product.id}
                            onClick={props.handleRemoveRecent}
                            variant="outline-danger" 
                            className="rem-btn">
                                &#10006;
                        </Button>
                    </Col>
                </Row>
                </Container>
            </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;