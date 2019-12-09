import React , { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../Components/UI/Title';
import SubTitle from '../../Components/UI/SubTitle';
import ProductCard from '../../Components/ProductCard';

export default class Search extends Component {
    render() {
        const {currentItems} = this.props.props;

        console.log("searchContainer",this.props);
        return(
            <Container>
                <Row><Col xs={4}><Title title={"Pesquisa"}/></Col></Row>
                <Row>
                    
                    <Col>
                    {currentItems!==[] ? currentItems.map((product)=> (
                        <ProductCard 
                        product={product}
                        handleSelect={this.props.handleSelect}
                        handleRemoveRecent={this.props.handleRemoveRecent}
                        handleOpenModal={this.props.handleOpenModal}
                        />
                    )) : <SubTitle title={"Nenhum resultado foi encontrado"} />}
                    </Col>
                </Row>                
            </Container>
        )
    }
}