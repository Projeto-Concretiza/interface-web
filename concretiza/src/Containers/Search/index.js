import React , { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../Components/UI/Title';
import ProductCard from '../../Components/ProductCard';

export default class Search extends Component {
    render() {
        console.log("searchContainer",this.props);
        return(
            <Container>
                <Row><Title title={"Pesquisa"}/></Row>
                <Row>
                    <Col>
                    {this.props.props.currentSearch.map((product)=> (
                        <ProductCard 
                        product={product}
                        handleSelect={this.props.handleSelect}
                        handleRemoveRecent={this.props.handleRemoveRecent}
                        handleOpenModal={this.props.handleOpenModal}
                        />
                    ))}
                    </Col>
                </Row>                
            </Container>
        )
    }
}