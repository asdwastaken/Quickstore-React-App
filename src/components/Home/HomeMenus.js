import './home.css';
import { sneakerContext } from '../../context/sneakersContext';
import { useContext } from 'react';

export default function HomeMenus() {

    const { sneakers,
        sneakersBrandValues,
        sneakersColorValues,
        sneakersGenderValues,
        sneakersSizeValues,
        onSizeChangeHandler,
        onGenderChangeHandler,
        onBrandChangeHandler,
        onColorChangeHandler,
        onSortChangeHandler,
        selectedOption,
        onResetFilterClick } = useContext(sneakerContext);

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
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.nike} value={sneakersBrandValues.nike} onChange={onBrandChangeHandler} name="nike" />
                                        <label className="form-check-label" htmlFor="nike">
                                            Nike
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.adidas} value={sneakersBrandValues.adidas} onChange={onBrandChangeHandler} name="adidas" />
                                        <label className="form-check-label" htmlFor="adidas">
                                            Adidas
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.jordan} value={sneakersBrandValues.jordan} onChange={onBrandChangeHandler} name="jordan" />
                                        <label className="form-check-label" htmlFor="jordan">
                                            Air Jordan
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.vans} value={sneakersBrandValues.vans} onChange={onBrandChangeHandler} name="vans" />
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
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.red} value={sneakersColorValues.red} onChange={onColorChangeHandler} name="red" />
                                        <label className="form-check-label" htmlFor="red">
                                            Red
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.blue} value={sneakersColorValues.blue} onChange={onColorChangeHandler} name="blue" />
                                        <label className="form-check-label" htmlFor="blue">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.black} value={sneakersColorValues.black} onChange={onColorChangeHandler} name="black" />
                                        <label className="form-check-label" htmlFor="black">
                                            Black
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.yellow} value={sneakersColorValues.yellow} onChange={onColorChangeHandler} name="yellow" />
                                        <label className="form-check-label" htmlFor="yellow">
                                            Yellow
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.green} value={sneakersColorValues.green} onChange={onColorChangeHandler} name="green" />
                                        <label className="form-check-label" htmlFor="green">
                                            Green
                                        </label>
                                    </div>
                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Gender</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersGenderValues.men} value={sneakersGenderValues.men} onChange={onGenderChangeHandler} name="men" />
                                        <label className="form-check-label" htmlFor="men">
                                            Men
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersGenderValues.women} value={sneakersGenderValues.women} onChange={onGenderChangeHandler} name="women" />
                                        <label className="form-check-label" htmlFor="women">
                                            Women
                                        </label>
                                    </div>
                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Size</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues[7]} value={sneakersSizeValues[7]} onChange={onSizeChangeHandler} name="7" />
                                        <label className="form-check-label" htmlFor="size-7">
                                            7
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues[8]} value={sneakersSizeValues[8]} onChange={onSizeChangeHandler} name="8" />
                                        <label className="form-check-label" htmlFor="size-8">
                                            8
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"  checked={sneakersSizeValues[9]} value={sneakersSizeValues[9]} onChange={onSizeChangeHandler} name="9" />
                                        <label className="form-check-label" htmlFor="size-9">
                                            9
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues[10]} value={sneakersSizeValues[10]} onChange={onSizeChangeHandler} name="10" />
                                        <label className="form-check-label" htmlFor="size-10">
                                            10
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersGenderValues[11]} value={sneakersGenderValues[11]} onChange={onSizeChangeHandler} name="11" />
                                        <label className="form-check-label" htmlFor="size-11">
                                            11
                                        </label>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <button type="submit" className="filters-btn">Apply</button>
                                <button type="submit" className="filters-btn" onClick={onResetFilterClick}>Reset</button>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="sort-container">
                    <span>Sort</span>
                    <select className="form-select" value={selectedOption} onChange={onSortChangeHandler}>
                        <option value="relevance">Relevance</option>
                        <option value="price-ascending">Lowest Price</option>
                        <option value="price-descending">Highest Price</option>
                        <option value="alphabetical-ascending">Alphabetical A-Z</option>
                        <option value="alphabetical-descending">Alphabetical Z-A</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    )
}