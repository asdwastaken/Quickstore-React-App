import './cart.css';
import { useContext } from 'react';
import { sneakerContext } from '../../context/sneakersContext';
import { tShirtsContext } from '../../context/tShirtsContext';
import { shortsContext } from '../../context/shortsContext';


export default function Cart() {

    const { cartSneakers } = useContext(sneakerContext);
    const { cartTShirts } = useContext(tShirtsContext);
    const { cartShorts } = useContext(shortsContext);

    const cartArray = cartSneakers.concat(cartTShirts).concat(cartShorts);

    return (
        <div className="cart">
            <div className="cart-container">
                <form className="cart-form">
                    <h4>Products:</h4>
                    {cartArray.map((x, index) => {
                        return (
                            <span key={index} className="cart-product">{index+1}. {x}</span>
                        )
                    })}
                    
                    <button type="submit" className="checkout-btn">Checkout</button>
                </form>
            </div>
        </div>
    )
}