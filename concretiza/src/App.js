import React, { Component } from 'react';
import logo from './assets/Concretiza.png';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import './App.css';
import {Col, Row, Container} from 'react-bootstrap';
import Home from './Containers/Home';
import Products from './Containers/Products';
import Budget from './Containers/Budget';

  export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          currentPage:'budget',
          currentModal:null,
          currentItems:[],  
          localItems:[],
          recentSearch:[],
          currentUser:null,
          loading:false,
          currentPrice: 0
      }
      this.handlePageChange = this.handlePageChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.handleDeselect = this.handleDeselect.bind(this);
      this.handleLoadProducts = this.handleLoadProducts.bind(this);
      this.handleRemoveRecent = this.handleRemoveRecent.bind(this);
      this.handleCurrentItemsReset = this.handleCurrentItemsReset.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  loadRecentDemo = () => {
    let list = [
      {
       id:'0',
       brand:'brazilite',
       function:'encanamento',
       name:"Tubo PVC",
       price:(10.0),
       image:"https://cdn.leroymerlin.com.br/products/tubo_soldavel_25_00_mm_barra_3_00m_pvc_marrom_agua_fria_tigre_85949885_0001_600x600.jpg",
      },
      {
        id:'1',
        brand:'brazilite',
        function:'encanamento', 
        name:"Interrruptor",
        price:(12.0),
        image:"https://cdn.leroymerlin.com.br/products/conjunto_interruptor_simples_10a_branco_pial_plus_pial_legrand_85897896_0002_600x600.jpg"
      },
      {
        id:'2',
        brand:'brazilite',
        function:'encanamento',
        name:"Cerâmica",
        price:(15.0),
        image:"https://telhanorte.vteximg.com.br/arquivos/ids/326502-960-960/Piso-ceramico-esmaltado-bold-Itauba-HD-61x61cm-marrom-Formigres.jpg?v=636651017423300000"
      },
      {
        id:'3',
        name:"Açúcar",
        brand:'brazilite',
        function:'encanamento',
        price:(20.5), image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/400px-Sucre_blanc_cassonade_complet_rapadura.jpg"
      }
    ]
    let actualList = this.state.recentSearch;
    actualList = actualList.concat(list);
    this.setState({recentSearch: actualList});
    this.setState({localItems: actualList});
    console.log("local",this.state.localItems);
  }

  searchItemById = (id,list) => {
    const items = this.state[list];
    for(let item in items) {
      if(item.id === id){
        return item;
      }
    }
    return null;
  }

  getElementIndex = (id,list) => {
    const actual = this.state[list];
    for(let i = 0;i < actual.length;i++){
      if(actual[i].id === id) {
        return i;
      }
    }
    return -1;
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
    const {id} = event.target;
    console.log(id);
    let {currentItems, currentPrice} = this.state;
    const itemId = this.getElementIndex(id,'localItems');
    const item = this.state.localItems[itemId];
    currentPrice += item.price != undefined ? item.price : 0; 
    currentItems = currentItems.concat(item);
    this.setState({currentItems});
    this.setState({currentPrice});
    console.log(currentItems);
  }

  handleDeselect = (event) => {
    const { id } = event.target;
    let {currentItems,currentPrice} = this.state;
    for(let i = 0; i < currentItems;i++){
      if(currentItems[i].id === id){
        currentPrice -= currentItems[i].price;
        currentItems.splice(i,1);
      }
    }
    this.setState({currentItems});
    this.setState({currentPrice});
  }

  handleRemoveRecent = (event) => {
    const {recentSearch} = this.state;
    const index = this.getElementIndex(event.target.id,'recentSearch');
    recentSearch.splice(index,1);
    this.setState({recentSearch});
    
  }

  handleLoadProducts = () => {
    this.setState({currentPage:"products"});
  }

  handleCurrentItemsReset = () => {
    this.setState({currentItems:[]});
    this.setState({currentPrice:0});
  }

  handleOpenModal = (event) => {
    const {id} = event.target;
    const item = this.searchItemById(id,this.state.localItems);
    this.setState({currentModal:item});
  }

  handleCloseModal = (event) => {
    this.setState({currentModal:null});
  }

  render() {
    const screen = {
      home: (
        <Home 
          props={this.state}
          currentUser={this.state.currentUser}
          handlePageChange={this.handlePageChange} 
        />
      ),
      products: (
        <Products
          props={this.state}
          recentSearch={this.state.recentSearch}
          handleSearch={this.handleSearch}
          handleSelect={this.handleSelect}
          handleRemoveRecent={this.handleRemoveRecent}
        />
      ),
      budget: (
        <Budget
          props={this.state}
          handleSelect={this.handleSelect}
          handleDeselect={this.handleDeselect}
          handleCurrentItemsReset={this.handleCurrentItemsReset}
        />
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
              <Sidebar className="home-element" pages={screen} handlePageChange={this.handlePageChange} />
            </Col>
            <Col xs={{offset:2}} md={{offset:2}} lg={{offset:2}}>

              {this.state.currentModal ? <></> : null}
              
              <div className="content-element">{screen[this.state.currentPage]}</div>
            </Col> 
          </Row>
        </Container>
      </div>
    )
  }
}

