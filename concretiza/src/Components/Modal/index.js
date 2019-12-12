import React from 'react';
import { Modal, Button, Container, Card, Col, Row } from 'react-bootstrap';
import Title from '../UI/Title';
import ProductCartCard from '../ProductCartCard';

const ModalComponent = (props) => {
  console.log('modalComponent',props);
  const { item, handleCloseModal, handleSelect, handleOpenModal, searchItemById} = props;

  //Fix temporario POG
  const getRelatedItems = () => {
    let relatedList = [];
    for(let i = 0; i < item.relatedItems.length ; i++) {
      let rel = searchItemById(item.relatedItems[i],"localItems");
      console.log("rel",rel)
      relatedList.push(rel);
    }
    return relatedList;
  }

  //Fix temporario POG
  const addProduct = () => {
    let event = {
        target: {
            id: item.id
        }
    }
    handleSelect(event);
}
  const related = getRelatedItems();

  console.log("relatedItems",getRelatedItems());
    return(
      <Modal show={item} onHide={handleCloseModal} size="lg">
         
          <Modal.Body><Col xs={{offset:'11'}}><Button variant="danger" onClick={handleCloseModal}>&#10006;</Button></Col></Modal.Body>
          <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Container>
                    <Row>
                      <Col xs={{offset:3}}>
                        <Card.Title>
                          <Row >
                            <Col xs={{offset:'7'}}>
                              <Button id={item.id} onClick={addProduct} variant="none"><h5>&#43;</h5></Button>
                            </Col>
                          </Row>
                        </Card.Title>
                      </Col>
                    </Row>
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
                    { getRelatedItems().map(relItem => (
                      relItem ? 
                      <ProductCartCard
                       product={relItem}
                       handleSelect={handleSelect}
                       handleOpenModal={handleOpenModal}
                      /> : null
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
