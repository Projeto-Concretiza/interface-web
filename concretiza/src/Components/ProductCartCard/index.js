import React from 'react';
import {Container,Col,Card,Row,Button} from 'react-bootstrap';
import Title from '../UI/Title';
import SubTitle from '../UI/SubTitle';

const CartList = (props) => {
    return(
       
            <Card style={{height:'5rem',width:'80%'}}>
                <Container>
                    <Row>
                        <Col xs={1} lg={2}>
                            <img style={{height:'4rem',width:'4rem'}} src={props.product.image}/>
                        </Col>
                        <Col xs={4} lg={10}>
                            <Row>
                                
                                <Col md={{offset:'4'}} lg={{offset:'3'}} xs={{offset:'1'}}>
                                    <Row>
                                        <h5>{props.product.name}</h5>
                                    </Row>
                                    <Row>
                                       <h6>Preço</h6>                                       
                                    </Row>
                                    <Row>
                                        <h6>${props.product.price}</h6>
                                    </Row>
                                </Col>
                                <Col  >
                                    <Button id={props.product.id} variant="none" onClick={props.handleSelect}><h5>&#43;</h5></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card>
         
    )
}

export default CartList;