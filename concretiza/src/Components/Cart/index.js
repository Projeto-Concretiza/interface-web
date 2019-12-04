import React from 'react';
import {Container, Card, Col, Row} from 'react-bootstrap';
import CartList from '../CartList';
import PriceCard from '../PriceCard';

const Cart = (props) => {
    console.log("CartComponent",props);
    return(
        <Container>
            <Row>
                <Col xs={8}>
                    <CartList 
                        products={props.currentItems}
                        handleSelect={props.handleSelect}
                        handleDeselect={props.handleDeselect}
                    />
                </Col>
                <Col xs={4}>
                    <PriceCard 
                        currentPrice={props.currentPrice} 
                        handleCurrentItemsReset={props.handleCurrentItemsReset}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;