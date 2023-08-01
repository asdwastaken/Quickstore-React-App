import './home.css';
import shoesBlue from '../../images/jordan-blue.png';
import shoesRed from '../../images/jordan-red.png';
import { getAll } from '../../services/sneakerServices/sneakerService';
import { useEffect, useContext } from 'react';
import { sneakerContext } from '../../context/sneakersContext';
import HomeMenus from './HomeMenus';
import HomeProductsGrid from './HomeProductsGrid';

export default function Home() {

    const { setSneakers } = useContext(sneakerContext);

    useEffect(() => {
        getAll()
            .then(result => {
                setSneakers(result.sneakers);
            })
    }, [])

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
            </div >
        </div >
    )
}