import React, {useState} from "react";


export const SearchBar = ({listState, setListState}) => {
    const [search, setSearch] = useState('');
    const [notFound, setNotFound] = useState('false');
    const searchMovie = (e) => {
        // creation state and update
        setSearch(e.target.value);
        // List the movies from State in App.js
        let movies_found = listState.filter(peli => {
            return peli.title.toLowerCase().includes(search.toLowerCase());
        });

        if(search.length <=1 || movies_found <= 0){
            movies_found = JSON.parse(localStorage.getItem("movies"))
            setNotFound(true);
        }else{
            setNotFound(false);
        }


        // console.log(movies_found);
        setListState(movies_found);
    }
    return (
        <div className="search">
            <h3 className="title">Search Bar: {search}</h3>
            {(notFound && search.length >=2) && (
                <span className="notFound"><b>No matches found</b></span>
            )}

            <form>
                <input type="text"
                       id="search_field"
                        name="searchBar"
                       autoComplete="off"
                       value={search}
                       onChange={searchMovie}
                />
                <button id="search">Search</button>
            </form>
        </div>
    )

}