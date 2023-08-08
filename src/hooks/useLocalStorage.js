import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {

    const storedProducts = localStorage.getItem(key);

    const [products, setProducts] = useState(() => {

        if (storedProducts) {
            const serializedProducts = JSON.parse(storedProducts);
            return serializedProducts;
        }

        return initialValue;
    })


    const setLocalStorage = (product, filteredProducts) => {

        if (filteredProducts) {
            localStorage.setItem(key, JSON.stringify(filteredProducts));
            setProducts(filteredProducts);
        } else {
            const updatedProducts = [...products, product];
            localStorage.setItem(key, JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
        }



    }

    return ([
        products,
        setLocalStorage,
    ])
}