import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const showContext= createContext();

export function useShowRecord() {
   return useContext(showContext);
}


export function ShowContextProvider ({children}) {

    const[showDetails, setShowDetails] = useState(null);
    const[selectedShowName, setSelectedShowName] = useState(null);

    const fetchShows = () => {
        axios.get(" https://api.tvmaze.com/search/shows?q=all")
        .then((response)=> {
            const {data} = response;
            setShowDetails(data);
        
        })
        .catch((error)=> {
console.log(error)
        })
    }
    useEffect(() => {
        fetchShows();
    },[])

    const fetchSelectedShow = (showname) => {
        setSelectedShowName(showname)
    } 

    useEffect(() => {
        const auth = localStorage.getItem("selectedShowName");
        if (auth) {
            setSelectedShowName(JSON.parse(auth));
        }
      }, []);
    
      useEffect(() => {
        if (selectedShowName) {
          localStorage.setItem("selectedShowName", JSON.stringify(selectedShowName));
        }
      }, [selectedShowName]);
    const value= {showDetails, selectedShowName, fetchSelectedShow}
    return(
        <showContext.Provider value={value}>{children}</showContext.Provider>
    )
}