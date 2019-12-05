import React from 'react';
import {Container, Card, Col, Row} from 'react-bootstrap';
import CartList from '../CartList';
import PriceCard from '../PriceCard';
import './style.css';

const Cart = (props) => {
    console.log("CartComponent",props);
    return(
        <Container>
            <Row>
                <Col xs={8}>
                    <CartList 
                        currentItems={props.currentItems}
                        handleSelect={props.handleSelect}
                        handleDeselect={props.handleDeselect}
                    />
                </Col>
                <Col  md={{span: 3,offset:6}} xs={{span: 3,offset:6}} id="price_card">
                    <PriceCard 
                        currentPrice={props.currentPrice} 
                        handleCurrentItemsReset={props.handleCurrentItemsReset}
                        handleCurrentItemsReset={props.handleCurrentItemsReset}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;