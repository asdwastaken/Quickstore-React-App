const url = 'tshirts.json';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then(result => {
            return result.tshirts;
        })
        .catch(err => console.log(err))
}