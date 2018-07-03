import React, {Component} from "react";
import Helper from '../../components/Helper';
import TableAddFee from "./TableAddFee";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddFeeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            registration_number: '',
            table_Data:[],
            zero:0,
            test:'',
        };
        console.log(this.state.table_Data.length,"is length of array");
        console.log(this.state.table_Data," is data in array");
    }

    notify = (msg) => {
        toast(msg);
    }

    condition = () =>{
        if(this.state.table_Data.length===0){
            console.log('zero is passed');
            return(
                <TableAddFee data={this.state.zero} triggerParent = {this.passingChild} />
            );
        }
        else{
            console.log("parameters passed");
            return(
            <TableAddFee data={this.state.table_Data} triggerParent = {this.passingChild} />
            );
        }
    }

    passingChild = ( childparameter ) => {
        // let feeIndex = this.state.table_Data.findIndex((dt)=>{
        //     return parseInt(dt.installment_id) === parseInt(childparameter) 
        // });
        // this.table_Data[feeIndex].status = 1;
        
        this.state.table_Data.map((data,i)=>{
            if(data.installment_id === childparameter){
                data.status=1;
            }
        });
        this.setState({
            test:childparameter,
        })
        
        console.log(childparameter,"passingChild fn working");
    }
    


    setRegistrationNo = (e) => {
        this.setState({registration_number: e.target.value});

    }

    addDetails = () => {
        let body = {};
        console.log(body,"body");
        let res = Helper(`http://192.168.1.17:3000/v1/getStudentDetails/${this.state.registration_number}`, 'GET', body);

        res.then((res) => {
            this.setState({table_Data: res});
            this.notify("successfully Receieved User Details ")
        })
    }
    render() {
        return (
            <div className="row">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Add Fee</h4>
                            </div>
                            <div className="content">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Registration No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onKeyUp={this.setRegistrationNo}
                                                    placeholder="Enter Registration Number"/>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-info btn-fill pull-right"
                                        onClick={this.addDetails}>Search</button>
                                    <div className="clearfix"/>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
                {this.condition()}
                <ToastContainer autoClose={8000} />

            </div>

        );
    }
}

export default AddFeeForm;