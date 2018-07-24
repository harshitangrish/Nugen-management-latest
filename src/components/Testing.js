import React, {Component} from "react";

class Testing extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row-12">
                <div className="col-md-12">
                    {this
                        .props
                        .courses_name
                        .map((name, i) => {
                            return (
                                <button type="button" class="close btn btn-outline-danger" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <span key={i} className="h6" >{name}</span>
                                </button>
                                
                            )
                        })
}
                </div>
            </div>
        );
    }
}

export default Testing;