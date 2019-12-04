import React from 'react';
import {Container, Row, Col,Card, Button, ListGroup} from 'react-bootstrap';
import Title from '../UI/Title';
import CategoryCard from '../CategoryCard/index';

const Categories = (props) => {
    return(
        <Container>
        <Row>{" "}</Row>
            <Row>
            <Col>
                <Row>
                    <Col md={4} lg={4} xs={4}><Title title={"Categorias"}/></Col>
                    {/* <Button/> */}
                </Row>
                <Container>
                    <Row>

                        
                        <CategoryCard 
                        title={"Material Hidraulico"}
                        opts={[
                            {name:"Tubo PVC",id:"TPVC"},
                            {name:"Tubos para Esgoto",id:"TPESG"},
                            {name:"Conexões para água fria",id:"COPAGF"}
                        ]}
                        color={"#63B8FF"}
                         />
                        <CategoryCard 
                            title={"Pisos"}
                            opts={[
                                {name:"Cerâmicos",id:"PCE"},
                                {name:"Mosaicos",id:"PMO"},
                                {name:"Azuleijos",id:"PAZ"}
                            ]}
                            color={"#5AE8B8"}
                        />
                        <CategoryCard 
                            title={"Tintas e Químicos"}
                            opts={[
                                {name:"Tintas Especiais",id:"TESP"},
                                {name:"Tintas Esmalte",id:"TESM"},
                                {name:"Tintas Spray",id:"TSP"}
                            ]}
                            color={"#8DFF71"}
                        />
                        <CategoryCard 
                            title={"Material Elétrico"}
                            opts={[
                                {name:"Interruptores",id:"IEL"},
                                {name:"Capinhas",id:"CEL"},
                                {name:"Conexões",id:"CONEL"}
                            ]}
                            color={"#E8DF5A"}
                        />
                    
                    
                    </Row>
                </Container>
            </Col>
            </Row>
            <Container  id="recent-products">
                
                
            </Container>
        </Container>
    )
}

export default Categories;