import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import {ItemDetails} from "./ItemDetails.jsx";

const SearchPage = (props) => {
  const [ name, setName ] = useState([]);

  //CHANGE THIS TO THE DATA WE GET FROM THE API
  const fetchData = async () => {
    //get product data from API
  }


  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <div className="card">
        <div className="card-body">
            <h3 className="card-title">
                Search
            </h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="name">Product</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={event => setName(event.target.value)} />
                    </div>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
            <div>
                <button className="btn btn-block btn-primary"
                    type="button"
                    onClick={() => props.onSearch({ name })}>Search</button>
            </div>

        </div>
    </div>;
      
      
    </>
   );
   //<Itemdetails countryList = {Itemdetails}/>
   //
   // 
   //<CountryList countryList = {CountryList}/>
}

export default SearchPage