import React , { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../Components/UI/Title';
import SubTitle from '../../Components/UI/SubTitle';
import ProductCard from '../../Components/ProductCard';

export default class Search extends Component {
    // componentDidMount() {
    //     this.load
    // }
    render() {
        const {currentSearchItems} = this.props.state;

        console.log("searchContainer",this.props);
        const {currentSearch,loading} = this.props.state;
        return(
            <Container>
                <Row>
                    <Col xs={4}>
                        <Title title={"Pesquisa"}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {(loading && currentSearch && currentSearchItems) || (currentSearch && currentSearchItems)  
                        ? currentSearchItems.map(product => (
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