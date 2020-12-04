import React, { useState } from 'react';
import {Link} from 'react-router-dom';
/*
    Goals:
        search by distributor name, city, item type, location, quantity price hightolow/lowtohigh


        onChange={e => this.setPPe({ppeType: e.target.value})}
*/

//for future implementation of sorting
function handleSort(ascending) {
    this.setState( {
        sortValue: ascending 
                   ? this.props.price.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
                   : this.props.price.sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
    } )
 }
const HomeSearch = props => {
  const [ location, setLocation] = useState([]);
  const [ productID, setPPe] = useState([]);
  const [ itemType, setName ] = useState([]);
  const  [ Distributorname, setDist ] = useState([]);
  
    function searchSpace(event) {
        let keyword = event.target.value;
        this.setState({search:keyword});
    }
    return <div className="card">
        <div className="card-body">
            <h3 className="card-body">
                Search for a Product
            </h3>
           
            <div className="row">
                <div className="col-6">
                    
                

                    <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="name">Item Type</label>
                        <input type="text"
                            id="itemType"
                            name="itemType"
                            className="form-control"
                            value={Distributorname}
                            onChange={event => setDist(event.target.value)} />
                    </div>
                    </div>


                    <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="name">Location</label>
                        <input type="text"
                            id="itemType"
                            name="itemType"
                            className="form-control"
                            value={location}
                            onChange={event => setLocation(event.target.value)} />
                    </div>
                    </div>
                    <button className="btn btn-primary"
                    type="button"
                    onClick={() => props.onSearch({ itemType, productID, Distributorname, location })}>Search</button>
                    <Link to="/home"><button type="button" class="btn btn-warning">
                        Cancel
                    </button>
                    </Link>
                    
                </div>
            </div>
            <div>
            </div>
            
        </div>
        
    </div>;
}

export default HomeSearch

/*
<div className="form-group">
                        <label htmlFor="name">Product Type</label>
                        <input type="text"
                            id="ppeType"
                            name="ppeType"
                            className="form-control"
                            value={productID}
                            onChange={event => setPPe(event.target.value)} />
                    </div>
*/