import React from "react";
import { Repository } from "../api/repository";
import Listing from "./Listing";

export class DistributorListings extends React.Component {

    repo = new Repository();

    state = {
        listings: []
    }

    render() {
        return (
        <div className="container">
                {//this.state.data.address}
                    this.state.listings.map((x, i) => 
                        (<div key={i}>
                            <Listing listing={x}/>
                        </div>)
                    )
                }
        </div>
        );
    }

    componentDidMount() {
        this.repo.getDistListings(this.props.match.params.id)
        .then(data => {
            this.setState({listings: data});
        });
    }

}