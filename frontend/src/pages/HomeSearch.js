import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Repository } from '../api/repository';
/*
    Goals:
        search by distributor name, city, item type, location, quantity price hightolow/lowtohigh
*/

class PollCard extends React.Component {    //${this.props.poll.type}
    render() {
      return (
        <div>{`${this.props.poll.name} - `}</div>
      )
    }
}

const dpolls = [
    {
  }
]
//export const HomeSearch = props => {

    
export function PollList(props) {
    
   let repo = new Repository();
  
   const [productName, setProductName] = useState(null);
   const [polls, setPolls] = useState(null);
   const [filteredPolls, setfilteredPolls] = React.useState(null);
   const [loading, setLoading] = React.useState(false);


  async function fetchMyAPI() {
    dpolls = props.getListSearch();
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1')
    const json = await response.json()
    // var data = json.filter(e => Date.parse(e.endDate) >= Date.parse(dateRange))
    setPolls(this.dpolls);
    setfilteredPolls(this.dpolls.filter(e => e.type === "A"));
    setLoading(true);
    
  }

  React.useEffect(() => {
    fetchMyAPI();
  }, [])


  //adding filters

  var A = dpolls.filter(e => e.type === "Shield")
  var B = dpolls.filter(e => e.type === "Thermometer")
  var C = dpolls.filter(e => e.type === "Mask")
  var D = dpolls.filter(e => e.type === "Gloves")


  function showShields() {
    setfilteredPolls(A)
  }

  function showThermoms() {
    setfilteredPolls(B)
  }

  function showMasks() {
    setfilteredPolls(C)
  }
  function showGloves() {
    setfilteredPolls(D)
  }
  
  
  function removeFiter() {
    setfilteredPolls(polls);
  }

    return <div className="card">
        <div className="card-body">
            <h3 className="card-body">
                Search for a Product
            </h3>
            <div className="polls">
        <button onClick={() => showShields()}>Shields</button>

        <button onClick={() => showThermoms()}> Thermometers</button>
        <button onClick={() => showMasks()}>Masks</button>
        <button onClick={() => showGloves()}>Gloves</button>
        <button onClick={() => removeFiter()}>Reset Filter</button>

        {
          filteredPolls && filteredPolls.map((poll) => (
            <div key={poll.listingID}>
              <PollCard ppeType={poll} />
              <hr style={{ opacity: '.1' }} />
            </div>

          ))
        }
      </div>

            <div className="row">
                <div className="col-6">
                    
                
                <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text"
                            id="pName"
                            name="pName"
                            className="form-control"
                            value={productName}
                            onChange={event => setProductName(event.target.value)} />
                    </div>
                    </div>
                    <button className="btn btn-primary"
                    type="button"
                    >Search</button>

                    <Link to="/home"><button type="button" className="btn btn-warning">
                        Cancel
                    </button>
                    </Link>
                    
                
            </div>
            <div>
            </div>
            
        </div>
        
    </div>
}

//for future implementation of sorting
function handleSort(ascending) {
    this.setState( {
        sortValue: ascending 
                   ? this.props.price.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
                   : this.props.price.sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
    } )
 }
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