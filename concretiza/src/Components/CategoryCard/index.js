import React from 'react';
import {Card,Container, Row, Col} from 'react-bootstrap';
import './style.css';
import SubTitle from '../UI/SubTitle';

const CategoryCard = (props) => {
    function alerta() {
        alert('ola');
    }

    const {title, opts,color} = props;
    
    return(
        
        <Card style={{width:'14rem'}} >
            <Card.Header style={{backgroundColor:color}}>
                <SubTitle title={title} />
            </Card.Header>
            <Card.Body>
            <Card.Text>
            
                <Col>
                    {opts ? opts.map((opt) => (
                        <Row><a href="" id={opt.id} onClick={alerta}>{opt.name}</a></Row>
                    )) : null}
                </Col>
            
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CategoryCard;