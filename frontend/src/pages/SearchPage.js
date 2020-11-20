import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import {ItemDetails} from "./ItemDetails.jsx";

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  //CHANGE THIS TO THE DATA WE GET FROM THE API
  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all') //''
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Distributors</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <ItemDetails countryList = {ItemDetails}/>
      
      
    </>
   );
   //<Itemdetails countryList = {Itemdetails}/>
   //
   // 
   //<CountryList countryList = {CountryList}/>
}

export default SearchPage