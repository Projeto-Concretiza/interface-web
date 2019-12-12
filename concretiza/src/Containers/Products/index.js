import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import RecentSearch from '../../Components/RecentSearch';
import Categories from '../../Components/Categories';

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
                    handleOpenModal={this.props.handleOpenModal}
                 />
                 <Categories
                    localItems={this.props.props.localItems}
                    searchItemById={this.props.searchItemById}
                    handleOpenModal={this.props.handleOpenModal}
                />
            </Container>
            </div>
        )
    }
} 