import React, {useState} from "react";
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navbar/NavBar";
import {MoviesList} from "./components/movie/MoviesList";
import {SearchBar} from "./components/aside/SearchBar";
import {Add} from "./components/aside/Add";
import {Footer} from "./components/footer/Footer";



function App() {


    const [listState, setListState] = useState([]);

    return (
        <div className="layout">
            {/*Header*/}
            <Header/>
            {/*NavBar*/}
            <NavBar/>
            {/*Movie List*/}
            <MoviesList
                listState={listState}
                setListState={setListState}
            />
            {/*Barra lateral*/}
            <aside className="lateral">
                <SearchBar
                    listState={listState}
                    setListState={setListState}
                />
                <Add
                    setListState={setListState}
                />
            </aside>
            {/* ---- Footer*/}
            <Footer/>
        </div>
    );
}

export default App;
