import React from 'react';
import {Link} from 'react-router-dom';


const CountryList = ({countryList=[]}) => {
    //filtering https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
    //alphabetical, price low to high, by product type

    // array has .filter function that's easy to manipulate
    return (
    <>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
              <p>{data.region}</p>
              <Link className="btn btn-link new-account" to="/distDetails">
              More info
            </Link>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList