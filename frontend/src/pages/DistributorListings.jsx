import React from "react";
import { Repository } from "../api/repository";
import Listing from "./Listing";

export class DistributorListings extends React.Component {

    repo = new Repository();

    state = {
        listings: [
            {name: "Super masks",
            price: 15,
            quantity: 500,
            location: "Dallas",
            id: 1,
            imgurl: "https://m.media-amazon.com/images/I/71Uq8Az+tYL._AC_UL320_.jpg",
            distributorName: "PPE Co."},
            {name: "Super masks",
            price: 15,
            quantity: 500,
            location: "Dallas",
            id: 2,
            imgurl: "https://m.media-amazon.com/images/I/71Uq8Az+tYL._AC_UL320_.jpg",
            distributorName: "PPE Co."},

        ]
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