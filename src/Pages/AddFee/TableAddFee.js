import React, {Component} from 'react';
import TableRowAddFee from './TableRowAddFee';
import TableRowInstallments from './TableRowInstallments';
import './AddFee.css';

class TableAddFee extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props.data," data being passed through props");
    }

    passingStudentDetails = () => {
        // console.log(this.props.data,"data2");
        if(this.props.data===0){
            console.log('zero is running')
            return(<tbody></tbody>);
        }
        else{
            console.log('parameters is running');
            console.log(this.props.data,"data passed as props from add fee");
            return <TableRowAddFee data={this.props.data[0]} />;
    }

    }

    

    passingInstallments = () => {
        // console.log(this.props.data,"data2");
        if(this.props.data===0){
            console.log('installments zero is running')
            return(<tbody></tbody>);
        }
        else{
            console.log('installments parameters is running');
            console.log(this.props.data,"data passed as props from add fee to installmentsrow");
            return <TableRowInstallments data={this.props.data} triggerParent={this.props.triggerParent}/>
    }

    }

    render() {
        return (
            <div>
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Student Details</h4>
                            <p className="category">Complete details of student</p>
                        </div>
                        
                        {/* <div className="card"> */}
                        <div className="content table-responsive table-full-width">
                            {this.passingStudentDetails()}        
                    </div>
                    </div>
                </div>
                
            </div>
                
                <div className="row">
                {/* <button onClick={()=>{this.child('testing')}} >pass parameters</button> */}
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Installment Details</h4>
                        <p className="category">Complete details of all Installment</p>
                    </div>
                    <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Installment ID</th>
                                    <th>Installment Amount</th>
                                    <th>Installment due Date</th>
                                    <th>Installment status</th>
                                    <th>Receive Payment</th>
                                    
                                </tr>
                            </thead>
                            
                                {
                                    this.passingInstallments()
                                }
                                
                            
                        </table>
                    </div>
                </div>
            </div>

        </div>
            </div>

        );
    }
}

export default TableAddFee;