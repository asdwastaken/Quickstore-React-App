import { createContext, useState } from "react";


export const sneakerContext = createContext();

export const SneakerProvider = ({
    children
}) => {


    const [sneakers, setSneakers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');


    const [sneakersBrandValues, setSneakersBrandValues] = useState({
        nike: false,
        adidas: false,
        jordan: false,
        vans: false,
    })

    const [sneakersColorValues, setSneakersColorValues] = useState({
        red: false,
        blue: false,
        black: false,
        yellow: false,
        green: false,
    })

    const [sneakersGenderValues, setSneakersGenderValues] = useState({
        men: false,
        women: false,
    })

    const [sneakersSizeValues, setSneakersSizeValues] = useState({
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
    })


    const [likedProducts, setLikedProducts] = useState([]);

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


    const onResetFilterClick = (e) => {
        e.preventDefault();

        setSneakersBrandValues({
            nike: false,
            adidas: false,
            jordan: false,
            vans: false,
        })

        setSneakersColorValues({
            red: false,
            blue: false,
            black: false,
            yellow: false,
            green: false,
        })

        setSneakersGenderValues({
            men: false,
            women: false,
        })

        setSneakersSizeValues({
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
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
        setLikedProducts((state) => [...state, productName])
    }

    const unlikeProduct = (productName) => {
        alert(`You unliked ${productName}!`);
        setLikedProducts((state) => state.filter(x => x !== productName))
    }

    const addToCart = (productName) => {
        alert(`${productName} has been added to your cart!`)
    }


    const contextValues = {
        sneakers,
        setSneakers,
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
        likedProducts,
        onResetFilterClick
    }



    return (
        <sneakerContext.Provider value={contextValues}>
            {children}
        </sneakerContext.Provider>
    )
}