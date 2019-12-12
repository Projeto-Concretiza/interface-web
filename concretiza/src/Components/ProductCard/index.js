import React from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import './style.css';

const ProductCard = (props) => {
    console.log("PCard",props);
    const { handleSelect, product, handleOpenModal, handleRemoveRecent } = props;
    //temporary fix POG
    const addProduct = () => {
        let event = {
            target: {
                id: product.id
            }
        }
        handleSelect(event);
    }

    return (
        <Card>
            <Row>
                <Col>
                    <Card.Img src={product.image}/>
                </Col>
            </Row>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <Button 
                                    id={product.id}
                                    block
                                    className="details-btn"
                                    onClick={handleOpenModal}>
                                        Ver detalhes
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button 
                                    id={product.id}
                                    onClick={addProduct}
                                    variant="outline-dark"
                                    className="add-btn">
                                        &#10004;
                                </Button>
                            </Col>
                            <Col>
                                <Button 
                                    id={product.id}
                                    onClick={handleRemoveRecent}
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