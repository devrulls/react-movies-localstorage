import React, {useState} from "react";
import {Save_to_storage} from "../helpers/Save_to_storage";

export const Add = ({setListState}) => {
    const titleComponent = "Add Movie";
    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    });

    const { title, description } = movieState;

    const getFormValue = (e) => {
        e.preventDefault()
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Create Object
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };

        setMovieState(movie)
        // update the list
        setListState(elements => {
            return [...elements, movie];
        })

        // Save in the localstorage
        Save_to_storage("movies", movie);

    }

    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>
            <strong>
                {(title && description) && "you have created: " +title}
            </strong>
            <form onSubmit={getFormValue}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"/>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description">
                </textarea>
                <input type="submit"
                       id="save"
                       value="Save"/>
            </form>
        </div>
    )
}