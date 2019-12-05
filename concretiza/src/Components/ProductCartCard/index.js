import React from 'react';
import {Container,Col,Card,Row,Button} from 'react-bootstrap';
import Title from '../UI/Title';
import SubTitle from '../UI/SubTitle';

const CartList = (props) => {
    return(
       
            <Card style={{height:'5rem',width:'80%'}}>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <img style={{height:'4rem',width:'4rem'}} src={props.product.image}/>
                        </Col>
                        <Col xs={10}>
                            <Col>
                                
                                <Container>
                                    <Row>
                                        <h5>{props.product.name}</h5>
                                    </Row>
                                    <Row>
                                       <h6>Preço</h6>                                       
                                    </Row>
                                    <Row>
                                        <h6>${props.product.price}</h6>
                                    </Row>
                                </Container>
    
                            </Col>
                            <Col>
                        <Button>Add</Button>
                        </Col>
                        </Col>
                    </Row>
                </Container>
            </Card>
         
    )
}

export default CartList;