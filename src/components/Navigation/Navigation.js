import './navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/quickstore-logo.png';
import { useState } from 'react';

export default function Navigation() {

    const [mobileMenu, setMobileMenu] = useState(false);

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
                        <Link to="/"><img src={logo} className="nav-logo"/></Link>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="list-icon" viewBox="0 0 16 16" onClick={onMenuClick}>
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

        </nav >
    )
}