import './cart.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { sneakerContext } from '../../context/sneakersContext';
import { tShirtsContext } from '../../context/tShirtsContext';
import { shortsContext } from '../../context/shortsContext';
import { priceFormatter, discountPriceFormatter } from '../../functions/priceFormatter';
import Footer from '../Footer/Footer';

export default function Cart() {

    const [hovered, setHovered] = useState(false);

    const { cartSneakers } = useContext(sneakerContext);
    const { cartTShirts } = useContext(tShirtsContext);
    const { cartShorts } = useContext(shortsContext);

    const cartArray = cartSneakers.concat(cartTShirts).concat(cartShorts);
    let totalPrice = 0;

    cartArray.forEach(x => {
        if (x.discounted_price) {
            totalPrice += discountPriceFormatter(x.price);
        } else {
            totalPrice += priceFormatter(x.price);
        }
    })

    const buttonHoverHandler = () => {
        setHovered(!hovered);
    }


    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-form-container">
                    <form className="cart-form">
                        <h4 className="cart-products-heading">Products:</h4>
                        {cartArray.map((x, index) => {
                            return (
                                <span key={x.id} className="cart-product">{index + 1}. {x.name || x.brand_name + ' ' + x.model} - ${x.discounted_price ? discountPriceFormatter(x.price).toFixed(2) : priceFormatter(x.price).toFixed(2)}</span>
                            )
                        })}
                        <span className="total-price">Total: ${totalPrice.toFixed(2)}</span>
                        <Link to="/" className="cart-go-back-link" onMouseEnter={buttonHoverHandler} onMouseOut={buttonHoverHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className={hovered ? "cart-back-arrow-hovered" : "cart-back-arrow"} viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            Continue Shopping
                        </Link>
                        <button type="submit" className="checkout-btn">Checkout</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}