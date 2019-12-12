import React, { Component } from 'react';
import Title from '../../Components/UI/Title';
// import Sidebar from '../Sidebar';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            session:null,
            currentUser:null
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Title title={"Bem vindo"}/>
            </div>
        )
    }
} 