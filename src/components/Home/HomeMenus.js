import './home.css';
import { sneakerContext } from '../../context/sneakersContext';
import { useContext } from 'react';

export default function HomeMenus() {

    const { sneakers,
        sneakersFormValues,
        onChangeHandler, } = useContext(sneakerContext);

    return (
        <div className="home-products-container">
            <div className="home-sneakers-title-container">
                <h2 className="home-sneakers-heading">SNEAKERS</h2>
                <h3 className="home-sneakers-count">{sneakers.length} Sneakers Available</h3>
            </div>
            <div className="home-sort-filter-container">
                <div className="filter-container">
                    <div className="dropdown">
                        <button className="btn-filter dropdown-toggle" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Open Filter
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Brand</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!sneakersFormValues.nike} onChange={onChangeHandler} name="nike" />
                                        <label className="form-check-label" htmlFor="nike">
                                            Nike
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!sneakersFormValues.adidas} onChange={onChangeHandler} name="adidas" />
                                        <label className="form-check-label" htmlFor="adidas">
                                            Adidas
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!sneakersFormValues.jordan} onChange={onChangeHandler} name="jordan" />
                                        <label className="form-check-label" htmlFor="jordan">
                                            Air Jordan
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={!sneakersFormValues.vans} onChange={onChangeHandler} name="vans" />
                                        <label className="form-check-label" htmlFor="vans">
                                            Vans
                                        </label>
                                    </div>
                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Color</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="red-check">
                                            Red
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="blue-check">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="black-check">
                                            Black
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="yellow-check">
                                            Yellow
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="green-check">
                                            Green
                                        </label>
                                    </div>
                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Gender</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="men-check">
                                            Men
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="women-check">
                                            Women
                                        </label>
                                    </div>
                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Size</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="size-7-check">
                                            7
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="size-8-check">
                                            8
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="size-9-check">
                                            9
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="size-10-check">
                                            10
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="size-11-check">
                                            11
                                        </label>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="sort-container">
                    <span>Sort</span>
                    <select className="form-select">
                        <option selected>Relevance</option>
                        <option value="price-ascending">Lowest Price</option>
                        <option value="price-descending">Highest Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    )
}