import './home.css';
import shoesBlue from '../../images/jordan-blue.png';
import shoesRed from '../../images/jordan-red.png';
import { getAll } from '../../services/sneakerServices/sneakerService';

export default function Home() {

    getAll()

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

                <div className="home-products-container">

                </div>
            </div>
        </div>
    )
}