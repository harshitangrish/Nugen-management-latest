import React , {Component} from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AddFeeForm from "./AddFeeForm";

class AddFee extends Component {
    render() {
        return (
            <div className="wrapper">

                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                    <div className="container-fluid">
                        
                            <AddFeeForm/>
             
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
export default AddFee;