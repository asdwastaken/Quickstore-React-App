import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const sneakerContext = createContext();

export const SneakerProvider = ({
    children
}) => {


    const [sneakers, setSneakers] = useState([]);
    const [sneakersMobile, setSneakersMobile] = useState([]);
    const [allSneakers, setAllSneakers] = useState([]);
    const [sneakersCount, setSneakersCount] = useState(0);
    const [loadedMore, setLoadedMore] = useState(20);
    const [loadedMoreMobile, setLoadedMoreMobile] = useState(5);
    const [selectedOption, setSelectedOption] = useState('');
    const [likedSneakers, setLikedSneakers] = useLocalStorage('likedSneakers', []);
    const [cartSneakers, setCartSneakers] = useLocalStorage('cartSneakers', []);




    const [sneakersBrandValues, setSneakersBrandValues] = useState({
        Nike: false,
        Adidas: false,
        "Air Jordan": false,
        Vans: false,
        Converse: false,
        Champion: false
    })

    const [sneakersColorValues, setSneakersColorValues] = useState({
        Red: false,
        Blue: false,
        Black: false,
        Yellow: false,
        Green: false,
        White: false,
        Pink: false,
    })

    const [sneakersGenderValues, setSneakersGenderValues] = useState({
        men: false,
        women: false,
    })

    const [sneakersSizeValues, setSneakersSizeValues] = useState({
        "7": false,
        "8": false,
        "9": false,
        "10": false,
        "11": false,
    })



    const onBrandChangeHandler = (e) => {
        setSneakersBrandValues(state => ({ ...state, [e.target.name]: !state[e.target.name] }));
    }

    const onColorChangeHandler = (e) => {
        setSneakersColorValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };

    const onGenderChangeHandler = (e) => {
        setSneakersGenderValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };

    const onSizeChangeHandler = (e) => {
        setSneakersSizeValues((state) => ({ ...state, [e.target.name]: !state[e.target.name] }));
    };


    const onResetFiltersClick = (e) => {
        e.preventDefault();

        setSneakersBrandValues({
            Nike: false,
            Adidas: false,
            "Air Jordan": false,
            Vans: false,
            Champion: false,
            Converse: false,
        })

        setSneakersColorValues({
            Red: false,
            Blue: false,
            Black: false,
            Yellow: false,
            Green: false,
            White: false,
            Pink: false,
        })

        setSneakersGenderValues({
            men: false,
            women: false,
        })

        setSneakersSizeValues({
            "7": false,
            "8": false,
            "9": false,
            "10": false,
            "11": false,
        })
    }



    const onApplyFiltersClick = (e) => {
        e.preventDefault();
        let sneakersArray = allSneakers.slice();
        let brandArray = [];
        let colorArray = [];
        let genderArray = [];
        let sizeArray = [];

        const brandValues = Object.values(sneakersBrandValues);
        const colorValues = Object.values(sneakersColorValues);
        const genderValues = Object.values(sneakersGenderValues);
        const sizeValues = Object.values(sneakersSizeValues);

        const brandEntries = Object.entries(sneakersBrandValues);
        const colorEntries = Object.entries(sneakersColorValues);
        const genderEntries = Object.entries(sneakersGenderValues);
        const sizeEntries = Object.entries(sneakersSizeValues);

        brandEntries.forEach(x => {
            if (x[1] === true) {
                sneakersArray.map(product => {
                    if (product.brand_name === x[0]) {
                        brandArray.push(product);
                    }

                })

                setSneakers(brandArray);
                setSneakersMobile(brandArray);
                setSneakersCount(brandArray.length)
            }

            if (brandValues.every(x => x !== true)) {
                brandArray = sneakersArray;
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

                setSneakers(colorArray);
                setSneakersMobile(colorArray);
                setSneakersCount(colorArray.length)

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
                setSneakers(genderArray);

                setSneakersMobile(genderArray);
                setSneakersCount(genderArray.length)

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

                setSneakers(sizeArray);

                setSneakersMobile(sizeArray);
                setSneakersCount(sizeArray.length)

            }
            if (sizeValues.every(x => x !== true)) {
                sizeArray = genderArray;
                return sizeArray;
            }
        })

    }



    const sortSneakers = (option) => {
        const sortedSneakers = [...sneakers];

        switch (option) {

            case 'alphabetical-ascending':
                sortedSneakers.sort((a, b) => a.brand_name.localeCompare(b.brand_name));
                break;
            case 'alphabetical-descending':
                sortedSneakers.sort((a, b) => b.brand_name.localeCompare(a.brand_name));
                break;
            case 'price-ascending':
                sortedSneakers.sort((a, b) => a.price - b.price);
                break;
            case 'price-descending':
                sortedSneakers.sort((a, b) => b.price - a.price);
                break;
            case 'relevance':
                sortedSneakers.sort((a, b) => b.collection_slugs.length - a.collection_slugs.length);
                break;
            case 'rating':
                sortedSneakers.sort((a, b) => b.rating - a.rating);
                break;
        }

        setSneakers(sortedSneakers);
    };


    const onSortChangeHandler = (e) => {
        const selectedOption = e.target.value;
        setSelectedOption(selectedOption);
        sortSneakers(selectedOption);

    }



    const likeProduct = (productName) => {
        alert(`You liked ${productName}!`);
        setLikedSneakers(productName);
    }

    const unlikeProduct = (productName) => {
        alert(`You unliked ${productName}!`);
        const filteredProducts = likedSneakers.filter(product => product !== productName);

        setLikedSneakers(productName, filteredProducts);
    }

    const addToCart = (productName) => {
        alert(`${productName} has been added to your cart!`)
        setCartSneakers(productName);
    }


    const loadMoreProducts = () => {
        setLoadedMore(state => state + 20);
        setLoadedMoreMobile(state => state + 5);
    }

    const contextValues = {
        sneakers,
        setSneakers,
        sneakersMobile,
        setSneakersMobile,
        allSneakers,
        setAllSneakers,
        sneakersCount,
        loadedMore,
        loadedMoreMobile,
        loadMoreProducts,
        setSneakersCount,
        sneakersBrandValues,
        sneakersColorValues,
        sneakersGenderValues,
        sneakersSizeValues,
        onSizeChangeHandler,
        onGenderChangeHandler,
        onBrandChangeHandler,
        onColorChangeHandler,
        onSortChangeHandler,
        selectedOption,
        likeProduct,
        unlikeProduct,
        addToCart,
        likedSneakers,
        cartSneakers,
        onResetFiltersClick,
        onApplyFiltersClick
    }



    return (
        <sneakerContext.Provider value={contextValues}>
            {children}
        </sneakerContext.Provider>
    )
}