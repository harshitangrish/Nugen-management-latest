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
        console.log(this.props.data,'checking status in constructor')
    }

    checkStatus = (x) => {
        console.log(x,"checking data.x in checkStatus");
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
        console.log(data.status,"testing updateStatus");
        let body = JSON.stringify({
            installment_id: data.installment_id,
        });
        console.log(body);
        let url = "updateInstallmentStatus"
        let res = Helper(url, 'POST', body);

        res.then((res) => {
            console.log(res);
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