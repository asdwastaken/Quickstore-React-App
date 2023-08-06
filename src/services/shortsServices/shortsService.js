const url = 'shorts.json';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then(result => {
            return result.shorts;
        })
        .catch(err => console.log(err))
}