import React from 'react';
import {Link} from 'react-router-dom';


const CountryList = ({countryList=[]}) => {
    
  return (
    <>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
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