import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../UI/Title';
import CategoryCard from '../CategoryCard/index';

const Categories = (props) => {
    console.log("CategoriesComponent",props);
    const allCategories = () => {
        let categoriesList = [];
        for(let i = 0;i < props.localItems.length;i++) {
            console.log(props.localItems[i]);
            if(!(props.localItems[i].category in categoriesList)) {
                categoriesList.push(props.localItems[i].category);
            }
        }
        return categoriesList;
    }
    const allNames = () => {
        let nameList = [];
        for(let i = 0; i < props.localItems.length; i++) {
            if(!(props.localItems[i].name in nameList)) {
                nameList.push(props.localItems[i].name);
            }
        }
        return nameList;
    }
    console.log("AllCategories and names",{categories:allCategories(),names:allNames()});
    
    return(
        <Container>
        <Row>{" "}</Row>
            <Row>
            <Col>
                <Row>
                    <Col md={4} lg={4} xs={4}><Title title={"Categorias"}/></Col>
                    {/* <Button/> */}
                </Row>
                <Container id="categories">
                    <Row>

                        
                        <CategoryCard 
                        title={"Material Hidraulico"}
                        opts={[
                            {name:"Tubo PVC",id:"0"},
                            {name:"Tubos para Esgoto",id:"TPESG"},
                            {name:"Conexões para água fria",id:"COPAGF"}
                        ]}
                        color={"#1A748E"}
                        searchItemById={props.searchItemById}
                        handleOpenModal={props.handleOpenModal}
                         />
                        <CategoryCard 
                            title={"Pisos"}
                            opts={[
                                {name:"Cerâmicos",id:"2"},
                                {name:"Mosaicos",id:"PMO"},
                                {name:"Azuleijos",id:"PAZ"}
                            ]}
                            color={"#55C4D7"}
                            searchItemById={props.searchItemById}
                            handleOpenModal={props.handleOpenModal}
                        />
                        <CategoryCard 
                            title={"Tintas e Químicos"}
                            opts={[
                                {name:"Tintas Especiais",id:"TESP"},
                                {name:"Tintas Esmalte",id:"TESM"},
                                {name:"Tintas Spray",id:"TSP"}
                            ]}
                            color={"#F0DF99"}
                            searchItemById={props.searchItemById}
                            handleOpenModal={props.handleOpenModal}
                        />
                        <CategoryCard
                            title={"Material Elétrico"}
                            opts={[
                                {name:"Interruptores",id:"1"},
                                {name:"Capinhas",id:"CEL"},
                                {name:"Conexões",id:"CONEL"}
                            ]}
                            color={"#D38E31"}
                            searchItemById={props.searchItemById}
                            handleOpenModal={props.handleOpenModal}
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