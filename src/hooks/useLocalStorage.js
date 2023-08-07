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


    const setLocalStorage = (productName, filteredProducts) => {

        if (filteredProducts) {
            localStorage.setItem(key, JSON.stringify(filteredProducts));
            setProducts(filteredProducts);
        } else {
            const updatedProducts = [...products, productName];
            localStorage.setItem(key, JSON.stringify(updatedProducts));
            setProducts(updatedProducts);

        }



    }

    return ([
        products,
        setLocalStorage,
    ])
}