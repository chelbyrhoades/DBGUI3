import React from 'react'
import './Header.css'

export class Header extends React.Component {

    render() {

        return(

            <header>
                <h1 className="page-header">MaskerAid
                    {this.props.loggedIn && <div className="row float-right">
                        <div className="col">
                            <button type="button" className="btn btn-primary">Account</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary">Logout</button>
                        </div>
                    </div>}
                    
                </h1>
            </header>

        );


    }
        

}