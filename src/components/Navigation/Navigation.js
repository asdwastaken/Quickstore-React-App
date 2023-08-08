import './navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/quickstore-logo.png';
import { useContext, useState } from 'react';
import { sneakerContext } from '../../context/sneakersContext';
import { tShirtsContext } from '../../context/tShirtsContext';
import { shortsContext } from '../../context/shortsContext';

export default function Navigation() {

    const [mobileMenu, setMobileMenu] = useState(false);

    const { cartSneakers } = useContext(sneakerContext);
    const { cartTShirts } = useContext(tShirtsContext);
    const { cartShorts } = useContext(shortsContext);


    const isCartEmpty = () => {
        return cartSneakers.length > 0 || cartTShirts.length > 0 || cartShorts.length > 0;
    }

    const cartItemsCount = () => {
        return cartSneakers.length + cartTShirts.length + cartShorts.length;
    }

    const onMenuClick = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {mobileMenu
                    ?
                    <>
                        <Link to="/"><img src={logo} className="nav-logo" onClick={onMenuClick} /></Link>
                        <div className="nav-links-container-mobile">
                            <Link to="/" className="nav-link" onClick={onMenuClick}>Sneakers</Link>
                            <Link to="/t-shirts" className="nav-link" onClick={onMenuClick}>T-Shirts</Link>
                            <Link to="/shorts" className="nav-link" onClick={onMenuClick} >Shorts</Link>
                        </div>
                    </>
                    :
                    <>
                        <Link to="/"><img src={logo} className="nav-logo" /></Link>
                        <div className="nav-links-container">
                            <Link to="/" className="nav-link" >Sneakers</Link>
                            <Link to="/t-shirts" className="nav-link" >T-Shirts</Link>
                            <Link to="/shorts" className="nav-link" >Shorts</Link>
                        </div>
                    </>
                }


                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="user-icon" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>

                {mobileMenu
                    ?
                    <Link to="/cart" className={isCartEmpty() ? "cart-icon-container" : "empty-cart-icon-container"} onClick={onMenuClick}>
                        {isCartEmpty() && <span className="cart-items-count">{cartItemsCount()}</span>}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={isCartEmpty() ? "cart-icon" : "empty-cart-icon"} viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                    </Link>
                    :
                    <Link to="/cart" className={isCartEmpty() ? "cart-icon-container" : "empty-cart-icon-container"}>
                        {isCartEmpty() && <span className="cart-items-count">{cartItemsCount()}</span>}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={isCartEmpty() ? "cart-icon" : "empty-cart-icon"} viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                    </Link>

                }
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="list-icon" viewBox="0 0 16 16" onClick={onMenuClick}>
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

        </nav >
    )
}