import React, { Component } from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ExpenditureForm from "./ExpenditureForm";
import Table from './Table';
import 'whatwg-fetch';
import Modal from 'react-responsive-modal';
import cookie from 'react-cookies';



class Expenditure extends Component {

    constructor(props) {
        super(props);
        if (cookie.load('token') === undefined) {
            this.props.history.push("/");
        }
        this.state =
            {
                url: 'http://192.168.1.17:3000/v1/expenditures',
                info: [],
                loader: true,
                open: false
            };
        this.fetchInfo();
    }

    fetchInfo() {
        fetch(this.state.url)
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                console.log(res);
                this.setState({
                    info: res
                });
                this.toggleLoader();
            })

            .catch((err) => {
                console.log("Error while loading page", err);
            })
    }

    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className="wrapper">

                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                        <div className="container-fluid">
                            <div className={this.state.loader === true ? 'loader' : 'hide-loader'}>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                            <li>
                            <button className="btn btn-success" onClick={this.onOpenModal}>Add Expenditure</button>
                            </li>
                            </ul>
                            <Modal open={open} onClose={this.onCloseModal} center >
                           
                                <div className="frame">
                                    <div className="scroll">
                                        <ExpenditureForm />
                                    </div>
                                </div>
                            </Modal>

                            <Table />

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Expenditure;