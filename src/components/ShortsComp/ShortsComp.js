import './shortsComp.css';


import { getAll } from '../../services/shortsServices/shortsService';
import { useEffect, useContext } from 'react';
import { shortsContext } from '../../context/shortsContext';
import ShortsMenus from './ShortsMenus';
import ShortsProductsGrid from './ShortsProductsGrid';
import ShortsProductsGridMobile from './ShortsProductsGridMobile';
import { productRowsFormatter } from '../../functions/productRowsFormatter';

export default function ShortsComp() {

    const { setShorts,
        setShortsMobile,
        setAllShorts,
        setShortsCount,
        shortsCount,
        loadedMore,
        loadedMoreMobile,
        loadMoreProducts,
        shortsBrandValues,
        shortsColorValues,
        shortsGenderValues,
        shortsSizeValues } = useContext(shortsContext);

    useEffect(() => {
        getAll()
            .then(result => {
                const products = productRowsFormatter(result, loadedMore);
                const productsMobile = productRowsFormatter(result, loadedMoreMobile);

                setShorts(products);
                setShortsMobile(productsMobile);
                setAllShorts(result);
                setShortsCount(result.length);
            })
    }, [shortsBrandValues, shortsColorValues, shortsGenderValues, shortsSizeValues, loadedMore, loadedMoreMobile])


    return (
        <div className="home-shorts">
            <div className="home-shorts-container">
                <div className="home-shorts-images-header">
                    <div className="home-shorts-image-container">
                        <img  className="home-image-shorts" />
                    </div>
                    <div className="home-shorts-image-container">
                        <img  className="home-image-shorts" />

                    </div>
                </div>

                <ShortsMenus />
                <ShortsProductsGrid />
                <ShortsProductsGridMobile />

                {loadedMore >= shortsCount &&
                    <span id="no-more-products-span">No more products</span>
                }

                <div className="load-more-btn-container">
                    <button className="load-more-btn"
                        disabled={loadedMore >= shortsCount ? true : false}
                        onClick={loadMoreProducts}>Load More
                    </button>
                </div>

                {loadedMoreMobile >= shortsCount &&
                    <span id="no-more-products-span-mobile">No more products</span>
                }

                <div className="load-more-btn-container-mobile">
                    <button className="load-more-btn"
                        disabled={loadedMoreMobile >= shortsCount ? true : false}
                        onClick={loadMoreProducts}>Load More
                    </button>
                </div>

            </div >
        </div >
    )
}