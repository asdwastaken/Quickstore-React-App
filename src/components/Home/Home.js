import './home.css';
import shoesBlue from '../../images/jordan-blue.png';
import shoesRed from '../../images/jordan-red.png';
import { getAll } from '../../services/sneakerServices/sneakerService';
import { useEffect, useContext } from 'react';
import { sneakerContext } from '../../context/sneakersContext';
import HomeMenus from './HomeMenus';
import HomeProductsGrid from './HomeProductsGrid';
import HomeProductsGridMobile from './HomeProductsGridMobile';
import { productRowsFormatter } from '../../functions/productRowsFormatter';

export default function Home() {

    const { setSneakers,
        setSneakersMobile,
        setAllSneakers,
        setSneakersCount,
        sneakersCount,
        loadedMore,
        loadedMoreMobile,
        loadMoreProducts,
        sneakersBrandValues,
        sneakersColorValues,
        sneakersGenderValues,
        sneakersSizeValues } = useContext(sneakerContext);

    useEffect(() => {
        getAll()
            .then(result => {
                const products = productRowsFormatter(result, loadedMore);
                const productsMobile = productRowsFormatter(result, loadedMoreMobile);

                setSneakers(products);
                setSneakersMobile(productsMobile);
                setAllSneakers(result);
                setSneakersCount(result.length);
            })
    }, [sneakersBrandValues, sneakersColorValues, sneakersGenderValues, sneakersSizeValues, loadedMore, loadedMoreMobile])


    return (
        <div className="home">
            <div className="home-container">
                <div className="home-images-header">
                    <div className="home-image-container">
                        <img src={shoesRed} className="home-image" />
                    </div>
                    <div className="home-image-container">
                        <img src={shoesBlue} className="home-image" />
                    </div>
                </div>

                <HomeMenus />
                <HomeProductsGrid />
                <HomeProductsGridMobile />

                {loadedMore >= sneakersCount &&
                    <span id="no-more-products-span">No more products</span>
                }

                <div className="load-more-btn-container">
                    <button className="load-more-btn"
                        disabled={loadedMore >= sneakersCount ? true : false}
                        onClick={loadMoreProducts}>Load More
                    </button>
                </div>

                {loadedMoreMobile >= sneakersCount &&
                    <span id="no-more-products-span-mobile">No more products</span>
                }

                <div className="load-more-btn-container-mobile">
                    <button className="load-more-btn"
                        disabled={loadedMoreMobile >= sneakersCount ? true : false}
                        onClick={loadMoreProducts}>Load More
                    </button>
                </div>

            </div >
        </div >
    )
}