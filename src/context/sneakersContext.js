import { createContext, useState } from "react";


export const sneakerContext = createContext();

export const SneakerProvider = ({
    children
}) => {


    const [sneakers, setSneakers] = useState([]);

    const [sneakersFormValues, setSneakersFormValues] = useState({
        nike: false,
        adidas: false,
        jordan: false,
        vans: false,
    })


    const [selectedOption, setSelectedOption] = useState('');


    const onBrandChangeHandler = (e) => {
        setSneakersFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
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



    const contextValues = {
        sneakers,
        setSneakers,
        sneakersFormValues,
        onBrandChangeHandler,
        onSortChangeHandler,
        selectedOption
    }



    return (
        <sneakerContext.Provider value={contextValues}>
            {children}
        </sneakerContext.Provider>
    )
}