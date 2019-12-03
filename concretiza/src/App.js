import React, { Component } from 'react';
import logo from './logo.svg';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import './App.css';
import {Col, Row, Container} from 'react-bootstrap';
import Home from './Containers/Home';
import Products from './Containers/Products';

  export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          currentPage:'products',
          currentItems:[],
          recentSearch:[],
          currentUser:null
      }
      this.handlePageChange = this.handlePageChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.handleLoadProducts = this.handleLoadProducts.bind(this);
  }

  loadRecentDemo = () => {
    let list = [
      {
        name:"Bolo",image:"http://ofner.vteximg.com.br/arquivos/ids/155809/img-ofner-bolo-mil-folhas.jpg?v=636616467400330000",
      },
      {
        name:"Acucar",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/400px-Sucre_blanc_cassonade_complet_rapadura.jpg"
      }
    ]
    let actualList = this.state.recentSearch;
    actualList = actualList.concat(list);
    this.setState({recentSearch: actualList});
  }

  componentDidMount() {
    this.loadRecentDemo();
  }

  handlePageChange = (event) => {
      const {value} = event.target;
      this.setState({currentPage: value});
  }

  handleSearch = (event) => {
      console.log(event.target.value);
  }

  handleSelect = (event) => {
    console.log(event.target.value);
  }

  handleLoadProducts = () => {
    this.setState({currentPage:"products"});
  }

  render() {
    // this.handleLoadProducts();
    const screen = {
      home: (
        <Home 
          props={this.props}
          currentUser={this.state.currentUser}
          handlePageChange={this.handlePageChange} 
        />
      ),
      products: (
        <Products
          props={this.props}
          recentSearch={this.state.recentSearch}
          handleSearch={this.handleSearch}
        />
      ),
      budget: (
      <>
      </>
      )
      
    };

    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Topbar logo={logo} handleSearch={this.handleSearch} className="home-element"/>
          </Row>
          <Row className="content">
            <Col xs={2} md={2} lg={2} id="sidebar">
              <Sidebar className="home-element" handlePageChange={this.handlePageChange} />
            </Col>
            <Col xs={10} md={10} lg={10}>
              <div className="content-element">{screen[this.state.currentPage]}</div>
            </Col> 
          </Row>
        </Container>
      </div>
    )
  }
}

