import './home.css';
import { sneakerContext } from '../../context/sneakersContext';
import { useContext } from 'react';



export default function HomeProductsGrid() {

    const { sneakers,
        likeProduct,
        addToCart } = useContext(sneakerContext);

  

    return (
        <div className="home-products-grid-container">
            {sneakers.map(x => {
                return (
                    <div className="card" key={x.id}>
                        <span className="heart-icon" onClick={() => likeProduct(x.name)}></span>
                        <img src={x.main_picture_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-brand">{x.brand_name}</h4>
                            <h5 className="card-title">{x.name}</h5>
                            {x.discounted_price
                                ? <p className="card-price">Price: <span id="old-price">${x.price / 100}</span> ${((x.price / 100) - (x.price / 100) * 20 / 100)} </p>
                                : <p className="card-price">Price: ${x.price / 100}</p>
                            }
                        </div>
                        <a className="add-btn" onClick={() => addToCart(x.name)}>Add To Cart</a>
                    </div>
                )
            }
            )}
        </div>
    )
}