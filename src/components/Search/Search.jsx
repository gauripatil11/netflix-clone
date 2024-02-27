import React from "react";
import "./Search.css";
import { useSearch } from "../Context/SearchContext";

function Search() {
  const { query, setQuery, flag,setFlag ,search,setResults} = useSearch();
  return (
    <div className=".search-form">
      <input
        className="search-input"
        type="text"
        placeholder="search here.."
        value={query}
        onChange={(e)=>{
            setQuery(e.target.value)
        }}
      />
      {!flag && <button className="search-button" onClick={()=>{
        search();
      }}>search</button>}
      {flag && <button className="cancel-button"  onClick={()=>{
        setFlag(false)
        setQuery('')
        setResults([])
      }}>X</button>}
    </div>
  );
}

export default Search;
