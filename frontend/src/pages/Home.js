import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import {Itemdetails} from "./itemdetails.js";
import SearchPage from './SearchPage';



export default function showHome(){

    return(
        <div className = "Container" >
            < SearchPage/>
            <button className= "topButtons">Account</button>
            <button className= "topButtons" >Logout</button>
            <div className = "myclass">
                
                < Itemdetails/>
                
            </div>

        </div>









    )
}