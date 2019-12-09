import React , { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../Components/UI/Title';
import SubTitle from '../../Components/UI/SubTitle';
import ProductCard from '../../Components/ProductCard';

export default class Search extends Component {
    render() {
        const {currentSearchItems} = this.props.props;

        console.log("searchContainer",this.props);
        return(
            <Container>
                <Row><Col xs={4}><Title title={"Pesquisa"}/></Col></Row>
                <Row>
                    
                    <Col>
                    {!this.props.props.loading && (currentSearchItems != null) ? currentSearchItems.map((product)=> (
                        <ProductCard 
                        product={product}
                        handleSelect={this.props.handleSelect}
                        handleRemoveRecent={this.props.handleRemoveRecent}
                        handleOpenModal={this.props.handleOpenModal}
                        />
                    )) :  null}
                    </Col>
                </Row>                
            </Container>
        )
    }
}