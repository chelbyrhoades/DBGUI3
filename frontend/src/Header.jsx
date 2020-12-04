import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Header.css'


function Header(props) {
//<Link to="/userProfile">    </Link>
    return(
        <header>
            <h1 className="page-header">MaskerAid
                {props.loggedIn && <div className="row float-right">
                <div className="col btn-col">
                        <Link type="button" className="btn btn-primary" to={`/orders/${props.uid}`}>Order History</Link>
                    </div>
                    <div className="col btn-col">
                        <Link type="button" className="btn btn-primary" to={`/user/${props.uid}`}>Account</Link>
                    </div>
                    <div className="col btn-col">
                        <Link to="/" type="button" className="btn btn-primary" onClick={props.onLogout}>Logout</Link>
                    </div>
                </div>}
            </h1>
        </header>

    ); 

}

export default Header;