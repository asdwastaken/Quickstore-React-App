import './tshirtsComp.css';

// import underArmourTShirt from '../../images/under-armour-tshirt-blue.png';
import nikeTShirtOrange from '../../images/nike-tshirt-orange.png';
import nikeTShirt from '../../images/nike-tshirt.png';
import { getAll } from '../../services/tShirtServices/tShirtService';
import { useEffect, useContext } from 'react';
import { tShirtsContext } from '../../context/tShirtsContext';
import TshirtsMenus from './TshirtsMenus';
import TshirtsProductsGrid from './TshirtsProductsGrid';
import TshirtsProductsGridMobile from './TshirtsProductsGridMobile';
import { productRowsFormatter } from '../../functions/productRowsFormatter';

export default function TshirtsComp() {

    const { setTshirts,
        setTshirtsMobile,
        setAllTshirts,
        setTshirtsCount,
        tShirtsCount,
        loadedMore,
        loadedMoreMobile,
        loadMoreProducts,
        tShirtsBrandValues,
        tShirtsColorValues,
        tShirtsGenderValues,
        tShirtsSizeValues } = useContext(tShirtsContext);

    useEffect(() => {
        getAll()
            .then(result => {
                const products = productRowsFormatter(result, loadedMore);
                const productsMobile = productRowsFormatter(result, loadedMoreMobile);

                setTshirts(products);
                setTshirtsMobile(productsMobile);
                setAllTshirts(result);
                setTshirtsCount(result.length);
            })
    }, [tShirtsBrandValues, tShirtsColorValues, tShirtsGenderValues, tShirtsSizeValues, loadedMore, loadedMoreMobile])


    return (
        <div className="home-t-shirts">
            <div className="home-t-shirts-container">
                <div className="home-t-shirts-images-header">
                    <div className="home-t-shirts-image-container">
                        <img src={nikeTShirtOrange} className="home-image-t-shirt" />
                    </div>
                    <div className="home-t-shirts-image-container">
                        <img src={nikeTShirt} className="home-image-t-shirt" />

                    </div>
                </div>

                <TshirtsMenus />
                <TshirtsProductsGrid />
                <TshirtsProductsGridMobile />

                {loadedMore >= tShirtsCount &&
                    <span id="no-more-products-span">No more products</span>
                }

                <div className="load-more-btn-container">
                    <button className="load-more-btn"
                        disabled={loadedMore >= tShirtsCount ? true : false}
                        onClick={loadMoreProducts}>Load More
                    </button>
                </div>

                {loadedMoreMobile >= tShirtsCount &&
                    <span id="no-more-products-span-mobile">No more products</span>
                }

                <div className="load-more-btn-container-mobile">
                    <button className="load-more-btn"
                        disabled={loadedMoreMobile >= tShirtsCount ? true : false}
                        onClick={loadMoreProducts}>Load More
                    </button>
                </div>

            </div >
        </div >
    )
}