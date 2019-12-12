import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductCartCard from '../ProductCartCard';

const CartList = (props) => {
    console.log("CartLst",props);
    return(
        <Container>
            <Row>
                <Col>
                    {props.currentItems.map((product) => (
                        <ProductCartCard
                         product={product}
                         handleSelect={props.handleSelect}
                         handleDeselect={props.handleDeselect}
                         handleOpenModal={props.handleOpenModal}
                        />
                    ))}
                </Col>
           </Row>
        </Container>   
    )
}

export default CartList;