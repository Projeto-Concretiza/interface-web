import React from 'react';
import {Modal,Button,Container,Card, Col,Row, ModalBody} from 'react-bootstrap';
import Title from '../UI/Title';
import SubTitle from '../UI/SubTitle';
import ProductCartCard from '../ProductCartCard';

const ModalComponent = (props) => {
  console.log('modalComponent',props);
  const { item, handleCloseModal, handleSelect, handleOpenModal} = props;
    return(
      <Modal show={item} onHide={handleCloseModal} size="lg">
         
          <Modal.Body><Col xs={{offset:'11'}}><Button variant="danger" onClick={handleCloseModal}>&#10006;</Button></Col></Modal.Body>
          <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Container>
                    <Card.Title>
                      <Row >
                        <Col xs={{offset:'7'}}>
                          <Button id={item.id} onClick={handleSelect} variant="none"><h5>&#43;</h5></Button>
                        </Col>
                      </Row>
                    </Card.Title>
                    <Row>
                      <Col>
                        <Card.Img src={item.image} />
                      </Col>
                    </Row>
                    <Card.Body>
                      <Card.Title>
                        <Title title={item.name}/>
                      </Card.Title>
                      <h5>Preço</h5>
                      <h5>${item.price}</h5>
                    </Card.Body>
                    <Card.Body>
                      <h5>Descrição</h5>
                      <h6>{item.description}</h6>
                    </Card.Body>
                  </Container>
                </Card>
              </Col>
              <Col>
                <Row>
                <Title title={"Frequentemente comprados juntos"}/>
                </Row>
                <Row>
                  <Col>
                    {props.relatedItems.map(relItem => (
                      (relItem.id === item.id ? null :
                      <ProductCartCard
                       product={relItem}
                       handleSelect={handleSelect}
                       handleOpenModal={handleOpenModal}
                      />)
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          </Modal.Body>
      </Modal>
      
    );
    
  }

export default ModalComponent;
  