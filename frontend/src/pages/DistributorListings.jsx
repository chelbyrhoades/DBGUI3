import React from "react";
import Listing from "./Listing";

export class DistributorListings extends React.Component {

    state = {
        listings: [
            {
                distributorName: "Johnson & Johnson",
                imgurl: "https://cdn11.bigcommerce.com/s-ixwpuc55v/images/stencil/1280x1280/products/10410/16660/FaceMask_2__62168.1591128381.jpg?c=1",
                name: "Masks",
                price: 5,
                quantity:1000,
                location: "Dallas",
                id: 0,
            }
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

}