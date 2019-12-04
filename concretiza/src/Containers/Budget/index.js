import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Cart from '../../Components/Cart';

export default class Budget extends Component {
    render() {
        console.log("BudgetContainer",this.props);
        return (
            <Container>
                <Cart 
                    props={this.props}
                    handleSelect={this.props.handleSelect}
                    handleDeselect={this.props.handleDeselect}
                    currentPrice={this.props.props.currentPrice}
                    handleCurrentItemsReset={this.props.handleCurrentItemsReset}
                />
            </Container>
        )
    }
}