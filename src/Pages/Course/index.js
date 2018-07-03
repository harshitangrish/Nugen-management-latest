import React , {Component} from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CourseForm from "./CourseForm";
import TableCourse from "./TableCourse";

class AddFee extends Component {
    render() {
        return (
            <div className="wrapper">

                <Sidebar />
                <div className="main-panel">
                    <Navbar history={this.props.history} />
                    <div className="content">
                    <div className="container-fluid">
                        <CourseForm />
                        <TableCourse />  
             
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
export default AddFee;