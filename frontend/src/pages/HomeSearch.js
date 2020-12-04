import React, { useState } from 'react';
/*
    Goals:
        search by distributor name, city, item type, price hightolow/lowtohigh
*/
const HomeSearch = props => {
   // results = {};
  const [ productName, setPName ] = useState([]);
    const [ ppeType, setPPeType ] = useState([]);
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    return <div className="card">
        <div className="card-body">
            <h3 className="card-body">
                Search for a Product
            </h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="name">Item Type</label>
                        <input type="text"
                            id="itemType"
                            name="itemType"
                            className="form-control"
                            value={ppeType}
                            onChange={event => setPPeType(event.target.value)} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={productName}
                            onChange={event => setPName(event.target.value)} />
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-block btn-primary"
                    type="button"
                    onClick={() => props.onSearch({ productName, ppeType })}>Search</button>
            </div>
        </div>
    </div>;
}

export default HomeSearch