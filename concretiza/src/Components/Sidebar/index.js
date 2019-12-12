import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Sidebar.css';
import '../../assets/icons/navbar/products.png';
// import Sidenav from 'react-sidenav'

const Sidebar = (props) => {
    return(
        <div>
            <div className="nav">
                <div className="nav_body">
                    {/* <Row >
                        <Col xs={6}>
                            <Button onClick={props.handlePageChange} value="home" className="nav-opt">
                            Home
                            </Button>
                            </Col>
                    </Row> */}
                    <Row >
                        <Col xs={6}><Button onClick={props.handlePageChange} value="products" className="nav-opt">Produtos</Button></Col>
                    </Row>
                    <Row>
                        <Col xs={6}><Button onClick={props.handlePageChange} value="budget" className="nav-opt">Orçamento</Button></Col>
                    </Row>
                    <Row>
                        <Col xs={6}><Button onClick={props.handlePageChange} value="about" className="nav-opt">Sobre</Button></Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;