import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const tShirtsContext = createContext();

export const TshirtProvider = ({
    children
}) => {


    const [tShirts, setTshirts] = useState([]);
    const [tShirtsMobile, setTshirtsMobile] = useState([]);
    const [allTshirts, setAllTshirts] = useState([]);
    const [tShirtsCount, setTshirtsCount] = useState(0);
    const [loadedMore, setLoadedMore] = useState(20);
    const [loadedMoreMobile, setLoadedMoreMobile] = useState(5);
    const [selectedOption, setSelectedOption] = useState('');
    const [likedTShirts, setLikedTShirts] = useLocalStorage('likedTShirts', []);
    const [cartTShirts, setCartTShirts] = useLocalStorage('cartTShirts', []);






    const [tShirtsBrandValues, setTshirtsBrandValues] = useState({
        Nike: false,
        Adidas: false,
        Puma: false,
        "Under Armour": false,
        "New Balance": false,
        Reebok: false,
        Vans: false,
    })

    const [tShirtsColorValues, setTshirtsColorValues] = useState({
        Red: false,
        Blue: false,
        Black: false,
        Yellow: false,
        Green: false,
        White: false,
        Gray: false,
        Beige: false,
    })

    const [tShirtsGenderValues, setTshirtsGenderValues] = useState({
        men: false,
        women: false,
    })

    const [tShirtsSizeValues, setTshirtsSizeValues] = useState({
        "S": false,
        "M": false,
        "L": false,
        "XL": false,
    })



    const onBrandChangeHandler = (e) => {
        setTshirtsBrandValues(state => ({ ...state, [e.target.name]: !state[e.target.name] }));
    }

    const onColorChangeHandler = (e) => {
        setTshirtsColorValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };

    const onGenderChangeHandler = (e) => {
        setTshirtsGenderValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };

    const onSizeChangeHandler = (e) => {
        setTshirtsSizeValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };


    const onResetFiltersClick = (e) => {
        e.preventDefault();

        setTshirtsBrandValues({
            Nike: false,
            Adidas: false,
            Puma: false,
            "Under Armour": false,
            "New Balance": false,
            Reebok: false,
            Vans: false,
        })

        setTshirtsColorValues({
            Red: false,
            Blue: false,
            Black: false,
            Yellow: false,
            Green: false,
            White: false,
            Gray: false,
            Beige: false,
        })

        setTshirtsGenderValues({
            men: false,
            women: false,
        })

        setTshirtsSizeValues({
            "S": false,
            "M": false,
            "L": false,
            "XL": false,
        })
    }



    const onApplyFiltersClick = (e) => {
        e.preventDefault();
        let tShirtsArray = allTshirts.slice();
        let brandArray = [];
        let colorArray = [];
        let genderArray = [];
        let sizeArray = [];

        const brandValues = Object.values(tShirtsBrandValues);
        const colorValues = Object.values(tShirtsColorValues);
        const genderValues = Object.values(tShirtsGenderValues);
        const sizeValues = Object.values(tShirtsSizeValues);

        const brandEntries = Object.entries(tShirtsBrandValues);
        const colorEntries = Object.entries(tShirtsColorValues);
        const genderEntries = Object.entries(tShirtsGenderValues);
        const sizeEntries = Object.entries(tShirtsSizeValues);

        brandEntries.forEach(x => {
            if (x[1] === true) {
                tShirtsArray.map(product => {
                    if (product.brand_name === x[0]) {
                        brandArray.push(product);
                    }
                })
                setTshirts(brandArray);
                setTshirtsMobile(brandArray);
                setTshirtsCount(brandArray.length)
            }

            if (brandValues.every(x => x !== true)) {
                brandArray = tShirtsArray;
                return brandArray;
            }
        })


        colorEntries.forEach(x => {
            if (x[1] === true) {
                brandArray.map(product => {
                    if (product.color === x[0]) {
                        colorArray.push(product);
                    }
                })
                setTshirts(colorArray);
                setTshirtsMobile(colorArray);
                setTshirtsCount(colorArray.length)

            }
            if (colorValues.every(x => x !== true)) {
                colorArray = brandArray;
                return colorArray;
            }
        })

        genderEntries.forEach(x => {
            if (x[1] === true) {
                colorArray.map(product => {
                    if (product.gender.includes(x[0])) {
                        genderArray.push(product);
                    }
                })
                setTshirts(genderArray);
                setTshirtsMobile(genderArray);
                setTshirtsCount(genderArray.length)

            }
            if (genderValues.every(x => x !== true)) {
                genderArray = colorArray;
                return genderArray;
            }
        })

        sizeEntries.forEach(x => {
            if (x[1] === true) {
                genderArray.map(product => {
                    if (product.size_range.includes(Number(x[0]))) {
                        sizeArray.push(product);
                    }
                })

                setTshirts(sizeArray);
                setTshirtsMobile(sizeArray);
                setTshirtsCount(sizeArray.length)

            }
        })
        if (sizeValues.every(x => x !== true)) {
            sizeArray = genderArray;
            return sizeArray;
        }

    }



    const sortTshirts = (option) => {
        const sortedTshirts = [...tShirts];

        switch (option) {

            case 'alphabetical-ascending':
                sortedTshirts.sort((a, b) => a.brand_name.localeCompare(b.brand_name));
                break;
            case 'alphabetical-descending':
                sortedTshirts.sort((a, b) => b.brand_name.localeCompare(a.brand_name));
                break;
            case 'price-ascending':
                sortedTshirts.sort((a, b) => a.price - b.price);
                break;
            case 'price-descending':
                sortedTshirts.sort((a, b) => b.price - a.price);
                break;
            case 'relevance':
                sortedTshirts.sort((a, b) => b.rating - a.rating);
                break;
            case 'rating':
                sortedTshirts.sort((a, b) => b.rating - a.rating);
                break;
        }

        setTshirts(sortedTshirts);
    };


    const onSortChangeHandler = (e) => {
        const selectedOption = e.target.value;
        setSelectedOption(selectedOption);
        sortTshirts(selectedOption);

    }



    const likeProduct = (brand, model) => {
        const productName = brand + ' ' + model;
        alert(`You liked ${brand} ${model}!`);
        setLikedTShirts(productName);
    }

    const unlikeProduct = (brand, model) => {
        const productName = brand + ' ' + model;

        alert(`You unliked ${brand} ${model}!`);
        const filteredProducts = likedTShirts.filter(product => product !== productName);
        setLikedTShirts(productName, filteredProducts);
    }

    const addToCart = (product) => {
        const productName = product.brand_name + ' ' + product.model;

        alert(`${productName} has been added to your cart!`)
        setCartTShirts(product);
    }


    const loadMoreProducts = () => {
        setLoadedMore(state => state + 20);
        setLoadedMoreMobile(state => state + 5);
    }

    const contextValues = {
        tShirts,
        setTshirts,
        tShirtsMobile,
        setTshirtsMobile,
        allTshirts,
        setAllTshirts,
        tShirtsCount,
        loadedMore,
        loadedMoreMobile,
        loadMoreProducts,
        setTshirtsCount,
        tShirtsBrandValues,
        tShirtsColorValues,
        tShirtsGenderValues,
        tShirtsSizeValues,
        onSizeChangeHandler,
        onGenderChangeHandler,
        onBrandChangeHandler,
        onColorChangeHandler,
        onSortChangeHandler,
        selectedOption,
        likeProduct,
        unlikeProduct,
        addToCart,
        likedTShirts,
        cartTShirts,
        setCartTShirts,
        onResetFiltersClick,
        onApplyFiltersClick
    }



    return (
        <tShirtsContext.Provider value={contextValues}>
            {children}
        </tShirtsContext.Provider>
    )
}