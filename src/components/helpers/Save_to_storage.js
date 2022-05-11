export const Save_to_storage = (key, element) => {
    // get elements we already have in localstorage
    let elements = JSON.parse(localStorage.getItem(key));
    // check if it is an array
    if (Array.isArray(elements)) {
        elements.push(element);
    } else {
        elements = [element];
    }
    // Save in the localstorage - return Objet
    localStorage.setItem(key, JSON.stringify(elements));
    return element

}