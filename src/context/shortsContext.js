import { createContext, useState } from "react";


export const shortsContext = createContext();

export const ShortsProvider = ({
    children
}) => {


    const [shorts, setShorts] = useState([]);
    const [shortsMobile, setShortsMobile] = useState([]);
    const [allShorts, setAllShorts] = useState([]);
    const [shortsCount, setShortsCount] = useState(0);
    const [loadedMore, setLoadedMore] = useState(20);
    const [loadedMoreMobile, setLoadedMoreMobile] = useState(5);
    const [selectedOption, setSelectedOption] = useState('');
    const [likedProducts, setLikedProducts] = useState([]);




    const [shortsBrandValues, setShortsBrandValues] = useState({
        Nike: false,
        Adidas: false,
        Puma: false,
        "Under Armour": false,
        "New Balance": false,
        Reebok: false,
        Vans: false,
    })

    const [shortsColorValues, setShortsColorValues] = useState({
        Red: false,
        Blue: false,
        Black: false,
        Yellow: false,
        Green: false,
    })

    const [shortsGenderValues, setShortsGenderValues] = useState({
        men: false,
        women: false,
    })

    const [shortsSizeValues, setShortsSizeValues] = useState({
        "S": false,
        "M": false,
        "L": false,
        "XL": false,
    })



    const onBrandChangeHandler = (e) => {
        setShortsBrandValues(state => ({ ...state, [e.target.name]: !state[e.target.name] }));
    }

    const onColorChangeHandler = (e) => {
        setShortsColorValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };

    const onGenderChangeHandler = (e) => {
        setShortsGenderValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };

    const onSizeChangeHandler = (e) => {
        setShortsSizeValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };


    const onResetFiltersClick = (e) => {
        e.preventDefault();

        setShortsBrandValues({
            Nike: false,
            Adidas: false,
            Puma: false,
            "Under Armour": false,
            "New Balance": false,
            Reebok: false,
            Vans: false,
        })

        setShortsColorValues({
            Red: false,
            Blue: false,
            Black: false,
            Yellow: false,
            Green: false,
            White: false,
            Gray: false,
            Beige: false,
        })

        setShortsGenderValues({
            men: false,
            women: false,
        })

        setShortsSizeValues({
            "S": false,
            "M": false,
            "L": false,
            "XL": false,
        })
    }



    const onApplyFiltersClick = (e) => {
        e.preventDefault();
        let shortsArray = allShorts.slice();
        let brandArray = [];
        let colorArray = [];
        let genderArray = [];
        let sizeArray = [];

        const brandEntries = Object.entries(shortsBrandValues);
        const brandValues = Object.values(shortsBrandValues);
        const colorEntries = Object.entries(shortsColorValues);
        const genderEntries = Object.entries(shortsGenderValues);
        const sizeEntries = Object.entries(shortsSizeValues);

        brandEntries.forEach(x => {
            if (x[1] === true) {
                shortsArray.map(product => {
                    if (product.brand_name === x[0]) {
                        brandArray.push(product);
                    }
                })

                setShorts(brandArray);
                setShortsCount(brandArray.length)
            }

            if (brandValues.every(x => x !== true)) {
                brandArray = shortsArray;
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

                setShorts(colorArray);
                setShortsCount(colorArray.length)

            }
        })

        genderEntries.forEach(x => {
            if (x[1] === true) {
                brandArray.map(product => {
                    if (product.gender.includes(x[0])) {
                        genderArray.push(product);
                    }
                })

                setShorts(genderArray);
                setShortsCount(genderArray.length)

            }
        })

        sizeEntries.forEach(x => {
            if (x[1] === true) {
                brandArray.map(product => {
                    if (product.size_range.includes(Number(x[0]))) {
                        sizeArray.push(product);
                    }
                })


                setShorts(sizeArray);
                setShortsCount(sizeArray.length)

            }
        })

    }



    const sortShorts = (option) => {
        const sortedShorts = [...shorts];

        switch (option) {

            case 'alphabetical-ascending':
                sortedShorts.sort((a, b) => a.brand_name.localeCompare(b.brand_name));
                break;
            case 'alphabetical-descending':
                sortedShorts.sort((a, b) => b.brand_name.localeCompare(a.brand_name));
                break;
            case 'price-ascending':
                sortedShorts.sort((a, b) => a.price - b.price);
                break;
            case 'price-descending':
                sortedShorts.sort((a, b) => b.price - a.price);
                break;
            case 'relevance':
                sortedShorts.sort((a, b) => b.rating - a.rating);
                break;
            case 'rating':
                sortedShorts.sort((a, b) => b.rating - a.rating);
                break;
        }

        setShorts(sortedShorts);
    };


    const onSortChangeHandler = (e) => {
        const selectedOption = e.target.value;
        setSelectedOption(selectedOption);
        sortShorts(selectedOption);

    }



    const likeProduct = (productName) => {
        alert(`You liked ${productName}!`);
        setLikedProducts((state) => [...state, productName])
    }

    const unlikeProduct = (productName) => {
        alert(`You unliked ${productName}!`);
        setLikedProducts((state) => state.filter(x => x !== productName))
    }

    const addToCart = (productName) => {
        alert(`${productName} has been added to your cart!`)
    }


    const loadMoreProducts = () => {
        setLoadedMore(state => state + 20);
        setLoadedMoreMobile(state => state + 5);
    }

    const contextValues = {
        shorts,
        setShorts,
        shortsMobile,
        setShortsMobile,
        allShorts,
        setAllShorts,
        shortsCount,
        loadedMore,
        loadedMoreMobile,
        loadMoreProducts,
        setShortsCount,
        shortsBrandValues,
        shortsColorValues,
        shortsGenderValues,
        shortsSizeValues,
        onSizeChangeHandler,
        onGenderChangeHandler,
        onBrandChangeHandler,
        onColorChangeHandler,
        onSortChangeHandler,
        selectedOption,
        likeProduct,
        unlikeProduct,
        addToCart,
        likedProducts,
        onResetFiltersClick,
        onApplyFiltersClick
    }



    return (
        <shortsContext.Provider value={contextValues}>
            {children}
        </shortsContext.Provider>
    )
}