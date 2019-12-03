import React from 'react';
import {Col,Navbar,Form, FormControl} from 'react-bootstrap';

const Topbar = (props) => {
    return (
        <Navbar bg="white" fixed="top">
            <Col xs={2} md={2} lg={2}>
                <Navbar.Brand ><img src={props.logo} width="45" height="45" className="d-inline-block-align-top" />
                {" "}Concretiza</Navbar.Brand>
                </Col>
            <Col lg={{span: 4,offset:7}}>
                <Form inline>
                    <FormControl onChange={props.handleSearch} type="text" placeholder="procurar..." className="mr-sm-2"></FormControl>
                </Form>
            </Col>
            {/* <input type="text" onChange={props.handleSearch}/> */}
        </Navbar>
    )   
}

export default Topbar;