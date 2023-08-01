import { createContext, useState } from "react";


export const sneakerContext = createContext();

export const SneakerProvider = ({
    children
}) => {


    const [sneakers, setSneakers] = useState([]);

    const [sneakersFormValues, setsneakersFormValues] = useState({
        nike: false,
        adidas: false,
        jordan: false,
        vans: false,
    })

    const onChangeHandler = (e) => {
        setsneakersFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }






    const contextValues = {
        sneakers,
        setSneakers,
        sneakersFormValues,
        onChangeHandler,
    }



    return (
        <sneakerContext.Provider value={contextValues}>
            {children}
        </sneakerContext.Provider>
    )
}