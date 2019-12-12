import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './style.css';
import SubTitle from '../UI/SubTitle';

const CategoryCard = (props) => {

    console.log("CategoryCard",props)
    function alerta() {
        alert('ola');
    }

    const {title, opts,color} = props;

    const search = (event) => {
        //Fix temporario POG S/ request
        props.handleOpenModal(event);
    }
    
    return(
        
        <Card style={{width:'14rem'}} >
            <Card.Header style={{backgroundColor:color}}>
                <SubTitle title={title} />
            </Card.Header>
            <Card.Body>
            <Card.Text>
            
                <Col>
                    {opts ? opts.map((opt) => (
                        <Row><button href="" className="opt-button" id={opt.id} onClick={search}>{opt.name}</button></Row>
                    )) : <></>}
                </Col>
            
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CategoryCard;