import React from 'react'
import './Header.css'


function Header(props) {
//<Link to="/userProfile">    </Link>
    return(
        <header>
            <h1 className="page-header">MaskerAid
                {props.loggedIn && <div className="row float-right">
                    <div className="col btn-col">
                    <button type="button" className="btn btn-primary">Account</button>
                    
                        
                    </div>
                    <div className="col btn-col">
                        <button type="button" className="btn btn-primary">Logout</button>
                    </div>
                </div>}
            </h1>
        </header>

    ); 

}

export default Header;