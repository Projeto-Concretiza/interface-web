import React , { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../Components/UI/Title';
import ProductCard from '../../Components/ProductCard';
import SubTitle from '../../Components/UI/SubTitle';

export default class Search extends Component {
    // componentDidMount() {
    //     this.load
    // }
    render() {
        console.log("searchContainer",this.props);
        const {currentSearch,loading} = this.props.state;
        return(
            <Container>
                <Row><Title title={"Pesquisa"}/></Row>
                <Row>
                    <Col>
                    {currentSearch && loading  ? currentSearch.map(product => (
                        <ProductCard 
                        product={product}
                        handleSelect={this.props.handleSelect}
                        handleRemoveRecent={this.props.handleRemoveRecent}
                        handleOpenModal={this.props.handleOpenModal}
                        />
                    )) : <SubTitle title={"Nada encontrado!"} />}
                    </Col>
                </Row>                
            </Container>
        )
    }
}