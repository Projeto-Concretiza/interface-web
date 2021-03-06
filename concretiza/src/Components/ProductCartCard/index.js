import React from 'react';
import {Container,Col,Card,Row,Button} from 'react-bootstrap';

const CartList = (props) => {
    console.log("ProductCartCard",props);
    const { handleSelect, handleOpenModal, product } = props;
    //temporary fix POG
    const addProduct = () => {
        let event = {
            target: {
                id: product.id
            }
        }
        handleSelect(event);
    }
    return(
        <Card style={{height:'5rem',width:'80%'}}>
            <Container>
                <Row>
                    <Col xs={1} lg={2}>
                        <img alt={product.name} style={{height:'4rem',width:'4rem'}} src={props.product.image}/>
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
                            <Row>
                                <Col>
                                    <Button variant="none" onClick={addProduct}><h5>&#43;</h5></Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="none" id={product.id} onClick={handleOpenModal}>?</Button>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Card>
         
    )
}

export default CartList;