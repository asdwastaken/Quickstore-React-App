const url = 'tshirts.json';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then(result => {
            console.log(result.tshirts);
        })
        .catch(err => console.log(err))
}