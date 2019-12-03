import React, {Component} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import RecentSearch from '../../Components/RecentSearch';

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        // console.log(this.props);
        return (
            <Container>
                <RecentSearch recentSearch={this.props.recentSearch}/>
            </Container>
        )
    }
} 