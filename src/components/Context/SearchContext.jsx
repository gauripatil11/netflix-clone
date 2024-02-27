import { createContext, useContext, useState } from "react";
import requests from "../../requests";
import axios from '../../axios';

const SearchContext = createContext();

export const useSearch = ()=>{
    return useContext(SearchContext)
}

export const SearchProvider = ({children})=>{
    const [query,setQuery] = useState('');
    const [flag,setFlag] = useState(false);
    const [results,setResults] = useState();
    const [loading,setLoading] = useState(true);

    const search = () => {
        axios.get(`${requests.search}&query=${query}`).then((response)=>{
          setResults(response.data.results);
          setFlag(!flag);
          setLoading(!loading);
        })
      }

    return(
        <SearchContext.Provider value={{search,query,setQuery,flag,setFlag,results,setResults,loading,setLoading}}>
            {children}
        </SearchContext.Provider>
    )
}

