import React,{ Component } from 'react'; 
import Helper from '../../components/Helper';

class TableRowInstallments extends Component {


    constructor(props){
        super(props);
        this.state={
            pending:'Pending',
            paid:'Paid',
            front_status:'',
        };
    }

    checkStatus = (x) => {
        if(x===0){
            return(
                this.state.pending
            );
        }
        else if(x===1){
            return(
                this.state.paid
            );
        } 
    };


    updateStatus = (data) => {
        let body = JSON.stringify({
            installment_id: data.installment_id,
        });
        let url = "updateInstallmentStatus"
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            if (res.msg === 1) {
                this.props.triggerParent(data.installment_id);

            }
            else {
                alert("Error while Receiving Payment");

            }

        });



    };
    
    render(){
        return (    
            this
            .props
            .data
            .map((data) => {
                        
                return (
                    
                    <tbody>
                    <tr>
                        <td>
                            {data.installment_id}
                        </td>
                        <td>
                            {data.amount}
                        </td>
                        <td>
                            {data.installment_date}
                        </td>
                        <td >
                            {
                                this.checkStatus(data.status)
                            }
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={()=>{
                                
                                this.updateStatus(data);
                            }
                                 }> Accept installment </button>
                        </td>

                    </tr>
                    </tbody>
                );
            })


);
    } 

}

export default TableRowInstallments;