import React, {Component} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import RecentSearch from '../../Components/RecentSearch';
import Categories from '../../Components/Categories';
import ModalComponent from '../../Components/Modal';

export default class Home extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        console.log("ProductsContainer",this.props);
        return (
            <div>
            <Container>
                <RecentSearch
                    recentSearch={this.props.recentSearch}
                    handleSelect={this.props.handleSelect}
                    handleRemoveRecent={this.props.handleRemoveRecent}
                 />
                 <Categories/>
            </Container>
            </div>
        )
    }
} 