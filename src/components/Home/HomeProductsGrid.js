import './home.css';
import { sneakerContext } from '../../context/sneakersContext';
import { useContext } from 'react';



export default function HomeProductsGrid() {

    const { sneakers } = useContext(sneakerContext);

    return (
        <div className="home-products-grid-container">
            {sneakers.map(x => {
                return (
                    <div className="card" key={x.id}>
                        <img src={x.main_picture_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-brand">{x.brand_name}</h4>
                            <h5 className="card-title">{x.name}</h5>
                            <p className="card-price">Price: ${x.price / 100}</p>
                            <a className="add-btn">Add To Cart</a>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}