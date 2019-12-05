import React from 'react';
import Title from '../UI/Title';
import {Container, Row, Col} from 'react-bootstrap';
import ProductCard from '../ProductCard';

import './style.css';

const RecentSearch = (props) => {
    console.log("RecentSearchComponent",props);
    const count = props.recentSearch ? props.recentSearch.length : 0;
    return(
        <Container>
        <Row>{" "}</Row>
            <Row>
            <Col md={4} lg={4} xs={4}>
                <Title title={"Recém Procurados"}/>
                <Row>
                    <Col lg={{span: 4,offset:6}}><h6>{count + " "}produtos</h6></Col>
                </Row>
            </Col>
            </Row>
            <Container  id="recent-products">
                <Row id="recent-carroussel">
                    { props.recentSearch.length > 0 
                        ?  props.recentSearch.map((product) => (
                        <ProductCard 
                            product={product} 
                            handleSelect={props.handleSelect}
                            handleRemove={props.handleRemove}
                            handleRemoveRecent={props.handleRemoveRecent}
                            handleOpenModal={props.handleOpenModal}
                            />
                        )) 
                        : null }
                </Row>
            </Container>
        </Container>
    )
}

export default RecentSearch;