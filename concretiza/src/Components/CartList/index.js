import React from 'react';
import {Container,Col,Card,Row} from 'react-bootstrap';
import Title from '../UI/Title';

const CartList = (props) => {
    return(
        <Container>
            <Card>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <Card.Img src={"https://cdn.leroymerlin.com.br/products/tubo_soldavel_25_00_mm_barra_3_00m_pvc_marrom_agua_fria_tigre_85949885_0001_600x600.jpg"}/>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>   
    )
}

export default CartList;