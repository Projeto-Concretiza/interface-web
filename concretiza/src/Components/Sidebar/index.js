import React from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import './Sidebar.css';
// import Sidenav from 'react-sidenav'

const Sidebar = (props) => {
    return (
        <div className="bar">
<>{" "}</>
        <Row >
            <Col><Button onClick={props.handlePageChange} value="home" className="nav-opt">Home</Button></Col>
        </Row>
        <Row >
            <Col><Button onClick={props.handlePageChange} value="products" className="nav-opt">Produtos</Button></Col>
        </Row>
        <Row>
            <Col><Button onClick={props.handlePageChange} value="budget" className="nav-opt">Orçamento</Button></Col>
        </Row>
        </div>
        
    )
}

export default Sidebar;