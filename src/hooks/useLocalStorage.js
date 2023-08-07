import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {

    const products = localStorage.getItem(key);

    const [likedProducts, setLikedProducts] = useState(() => {

        if (products) {
            const serializedProducts = JSON.parse(products);
            return serializedProducts;
        }

        return initialValue;
    })


    const setLocalStorage = (productName, filteredProducts) => {

        if (filteredProducts) {
            localStorage.setItem(key, JSON.stringify(filteredProducts));
            setLikedProducts(filteredProducts);
        } else {
            const updatedLikedProducts = [...likedProducts, productName];
            localStorage.setItem(key, JSON.stringify(updatedLikedProducts));
            setLikedProducts(updatedLikedProducts);

        }



    }

    return ([
        likedProducts,
        setLocalStorage,
    ])
}