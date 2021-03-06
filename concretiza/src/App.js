import React, { Component } from 'react';
import logo from './assets/Concretiza.png';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import './App.css';
import {Col, Row, Container} from 'react-bootstrap';
import Home from './Containers/Home';
import Products from './Containers/Products';
import Budget from './Containers/Budget';
import Search from './Containers/Search';
import About from './Containers/About';

import api from './api/Request';

import ModalComponent from './Components/Modal';

  export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          currentPage:'products',
          currentModal:false,
          currentItems:[],  
          localItems:[],
          currentSearchItems:null,
          currentSearch:[],
          recentSearch:[],
          currentUser:null,
          loading:false,
          currentPrice: 0
      }
      this.handleInitLoading = this.handleInitLoading.bind(this);
      this.handleEndLoading = this.handleEndLoading.bind(this);

      this.handlePageChange = this.handlePageChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
      this.handleDeselect = this.handleDeselect.bind(this);
      this.handleLoadProducts = this.handleLoadProducts.bind(this);
      this.handleRemoveRecent = this.handleRemoveRecent.bind(this);
      this.handleCurrentItemsReset = this.handleCurrentItemsReset.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleRequestProducts = this.handleRequestProducts.bind(this);
      this.searchItemByName = this.searchItemByName.bind(this);
  }
  loadLocalDemo = () => {
    let list = [
      {
       id:'0',
       brand:'brazilite',
       function:'Encanamento',
       category:'Material Hidraulico',
       name:"Tubo PVC",
       description:"Usado para transportar a água fria com qualidade e segurança nas obras residenciais",
       price:(10.0),
       relatedItems:['2','3'],
       image:"https://cdn.leroymerlin.com.br/products/tubo_soldavel_25_00_mm_barra_3_00m_pvc_marrom_agua_fria_tigre_85949885_0001_600x600.jpg",
      },
      {
        id:'1',
        brand:'brazilite',
        function:'Interruptor',
        category:'Material Elétrico',
        name:"Interrruptor",
        description:"Utilizado",
        price:(12.0),
        relatedItems:['0','3'],
        image:"https://cdn.leroymerlin.com.br/products/conjunto_interruptor_simples_10a_branco_pial_plus_pial_legrand_85897896_0002_600x600.jpg"
      },
      {
        id:'2',
        brand:'brazilite',
        function:'Cerâmicos',
        category:'Pisos',
        name:"Cerâmica",
        description:"",
        price:(15.0),
        relatedItems:['1','3'],
        image:"https://telhanorte.vteximg.com.br/arquivos/ids/326502-960-960/Piso-ceramico-esmaltado-bold-Itauba-HD-61x61cm-marrom-Formigres.jpg?v=636651017423300000"
      },
      {
        id:'3',
        name:"Açúcar",
        function:'Adoçar',
        category:'Aleatorio',
        brand:'brazilite',
        description:"",
        relatedItems:['2','0'],
        price:(20.5), image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg/400px-Sucre_blanc_cassonade_complet_rapadura.jpg"
      }
    ]
      let actualList = this.state.recentSearch;
      actualList = actualList.concat(list);
      this.setState({localItems: actualList});
  }
  loadRecentDemo = () => {
    let list = [];
    for(let i = 0; i < this.state.recentSearch; i++) {
      list.push(this.state.localItems[i])
    }
    this.setState({recentSearch:list});
  }

  handleInitLoading = () => {
    this.setState({loading:true});
  }

  handleEndLoading = () => {
    this.setState({loading:false});
  }

  searchItemById = (id,list) => {
    const items = this.state[list];
    for(let item = 0; item < items.length;item++) {
      if(items[item].id === id){
        return items[item];
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

  searchItemByName = (name,list) => {
    const actualList = (this.state[list]);
    let result = []
    for(let i = 0;i < actualList.length;i++) {
      if(name.toUpperCase() === actualList[i].name.toUpperCase()) {
        result.push(actualList[i]);
      }
    }
    console.log("searchResult",result);
    if(result.length === 0) {
      result = false;
    }
    return result;
  }

  componentDidMount() {
    this.loadLocalDemo();
    this.loadRecentDemo();
  }

  handleInitLoading = () => {
    this.setState({loading:true});
  }

  handleEndLoading = () => {
    this.setState({loading:false});
  }

  handlePageChange = (event) => {
    const {value} = event.target;
    this.setState({currentPage: value});
  }

  handleSearch = (event) => {
    const {value} = event.target;

    this.setState({currentSearch:value});

    this.setState({currentPage:'search'});

    let localResult = this.searchItemByName(value,"localItems");

    if(localResult.length > 0) {
        this.setState({currentSearchItems:localResult});
        return localResult;
    }


    else if(value.length >= 4) {
      this.handleInitLoading();
      console.log("handleSearchValue",value);


       this.handleRequestProducts("/products/name/" + value)
        .then(result => {
          this.setState({currentSearchItems:result});
          console.log("handleRequestProducts |",result);
          this.handleEndLoading();
        })
        .catch(e => {
          console.log(e);
          this.handleEndLoading();
          this.setState({currentSearchItems:null});
    })
    }
    else {
      this.setState({currentPage:'products'});
      this.handleEndLoading();
    }
  }

  handleSelect = (event) => {
    const {id} = event.target;
    console.log(id);
    let {currentItems, currentPrice} = this.state;
    const itemId = this.getElementIndex(id,'localItems');
    console.log("itemId",itemId);
    const item = this.state.localItems[itemId];
    currentPrice += (item.price !== undefined ? item.price : 0); 
    currentItems = currentItems.concat(item);
    this.setState({currentItems});
    this.setState({currentPrice});

    if (!(this.searchItemById(item.id,"recentSearch"))){
      let { recentSearch } = this.state;
      recentSearch.push(item);
      this.setState({recentSearch});
    }

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
  //To make requestsss
  handleRequestProducts = async (type) => {
    await api.get(type)
    .then(response => {
      console.log("handleRequest |",response.data);
      return response.data;
    })
    .catch(error => {
      console.log("handleRequest |", error);
    })
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
    console.log('openModal',id);
    const itemId = this.getElementIndex(id,'localItems');
    
    const item = this.state.localItems[itemId];
    this.setState({currentModal:item});
  }

  handleCloseModal = () => {
    this.setState({currentModal:false});
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
          searchItemById={this.searchItemById}
          handleSearch={this.handleSearch}
          handleSelect={this.handleSelect}
          handleRemoveRecent={this.handleRemoveRecent}
          handleOpenModal={this.handleOpenModal}
          handleOpenModal={this.handleOpenModal}
        />
      ),
      budget: (
        <Budget
          props={this.state}
          handleSelect={this.handleSelect}
          handleDeselect={this.handleDeselect}
          handleCurrentItemsReset={this.handleCurrentItemsReset}
          handleOpenModal={this.handleOpenModal}
        />
      ),
      search: (
        <Search
        state={this.state}
        handleSelect={this.handleSelect}
        handleRemoveRecent={this.handleRemoveRecent}
        handleOpenModal={this.handleOpenModal}
        />
      ),
      about: (
        <About />
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

              {this.state.currentModal !== false
              ? <ModalComponent
                 handleCloseModal={this.handleCloseModal}
                 item={this.state.currentModal}
                 handleSelect={this.handleSelect}
                 relatedItems={this.state.recentSearch}
                 handleOpenModal={this.handleOpenModal}
                 searchItemById={this.searchItemById}
                 /> 
              : null}
              
              <div className="content-element">{screen[this.state.currentPage]}</div>
            </Col> 
          </Row>
        </Container>
      </div>
    )
  }
}

