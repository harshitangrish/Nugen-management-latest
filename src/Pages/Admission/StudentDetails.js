import React, {Component} from 'react';
import TableRowAddFee from '../AddFee/TableRowAddFee';

class StudentDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.props.data," data being passed through props");
    }


    render() {
        return (
            
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Student Details</h4>
                            <p className="category">Complete details of student</p>
                        </div>
                        
                        <div className="content table-responsive table-full-width">
                            <TableRowAddFee data={this.props.data}/>        
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default StudentDetails;