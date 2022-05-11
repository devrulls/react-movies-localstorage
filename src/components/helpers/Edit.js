import React from "react";

export const Edit = ({peli, get_movies_from_localstorage, setEditState, setListState}) => {
    const title_component = "Edit movie"
    const saveEdit = (e, id) => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        console.log("title ====> ", title, "description ===>", description);
        // find the index of the object with findIndex
        const stored_movies = get_movies_from_localstorage();
        const index = stored_movies.findIndex(peli => peli.id === id);

        //create objet with index

        let movie_update =
            {
                id,
                title,
                description
            }
            //update element with index

        stored_movies[index] = movie_update;

        // stored localhost
        localStorage.setItem("movies",JSON.stringify(stored_movies));

        //update states -  setEditState setListState
        setListState(stored_movies);
        setEditState(0);

    };

    return (
        <div className='edit_form'>
            <h3 className="title">{title_component}</h3>
            <form onSubmit={e => saveEdit(e, peli.id)}>
                <input
                    type="text"
                    name="title"
                    className="title_edit"
                    defaultValue={peli.title}
                />
                <textarea
                    name="description"
                    className="description_edit"
                    defaultValue={peli.description}/>
                <input type="submit" className="editar" value="Update"/>

            </form>

        </div>
    )

}