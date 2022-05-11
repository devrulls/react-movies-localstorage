import React, {useEffect, useState} from "react";
import {Edit} from "../helpers/Edit";

export const MoviesList = ({listState, setListState}) => {
    // const [listState, setListState] = useState([]);
    const [editState, setEditState] = useState(0);

    useEffect(() => {
        // console.log("Component List Movie - mounted")
        get_movies_from_localstorage();
    }, []);

    const get_movies_from_localstorage = () => {
        let movies_localStorage = JSON.parse(localStorage.getItem("movies"));
        // console.log(movies_localStorage)
        setListState(movies_localStorage);
        return movies_localStorage;
    }

    const deleteMovie = (id) => {
        let allMovies = get_movies_from_localstorage();
        //filter
        let newListMovie = allMovies.filter(peli => peli.id !== parseInt(id) )
        //update State List
        setListState(newListMovie);
        //update localstorage
        localStorage.setItem("movies", JSON.stringify(newListMovie));


    }


    return (
        <section id="content" className="content">
            {listState != null ?
                listState.map(peli => {
                    return (
                        <article className="peli-item" key={peli.id}>
                            <h3 className="title">{peli.title}</h3>
                            <p className="description">{peli.description}</p>

                            <button
                                className="edit"
                                onClick={ () =>setEditState(peli.id)}>Edit</button>
                            <button className="delete" onClick={() => deleteMovie(peli.id)}>Delete</button>

                            {/*displays the edit form*/}
                            {editState === peli.id &&(
                                <Edit
                                    peli={peli}
                                    get_movies_from_localstorage={get_movies_from_localstorage}
                                    setEditState={setEditState}
                                    setListState={setListState}
                                />
                            )}



                        </article>
                    )
                })
                : <h2>There are no movies to show</h2>
            }
        </section>
    )
}