export const productRowsFormatter = (products, count) => {
    let newArray = products.slice();

    return newArray.splice(0, count);
}