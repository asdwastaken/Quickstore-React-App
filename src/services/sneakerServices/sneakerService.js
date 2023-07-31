const url = 'sneakers.json';


export const getAll = () => {
    return fetch(url)
    .then(res=>res.json())
    .then(result=>console.log(result))
}