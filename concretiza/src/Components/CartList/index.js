import React from 'react';
import {Container,Col,Card,Row} from 'react-bootstrap';
import Title from '../UI/Title';
import ProductCartCard from '../ProductCartCard';

const CartList = (props) => {
    console.log("CartLst",props);
    return(
        <Container>
            <Row>
                <Col>
                    {props.currentItems.map((product) => (
                        <ProductCartCard product={product} />
                    ))}
                </Col>
           </Row>
        </Container>   
    )
}

export default CartList;