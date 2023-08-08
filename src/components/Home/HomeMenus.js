import './home.css';
import { sneakerContext } from '../../context/sneakersContext';
import { useContext } from 'react';

export default function HomeMenus() {

    const { sneakers,
        sneakersCount,
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
        onResetFiltersClick,
        onApplyFiltersClick } = useContext(sneakerContext);

    return (
        <div className="home-products-container">
            <div className="home-sneakers-title-container">
                <h2 className="home-sneakers-heading">SNEAKERS</h2>
                <h3 className="home-sneakers-count">{sneakersCount} Sneakers Available</h3>
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
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.Nike} value={sneakersBrandValues.Nike} onChange={onBrandChangeHandler} name="Nike" />
                                        <label className="form-check-label" htmlFor="Nike">
                                            Nike
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.Adidas} value={sneakersBrandValues.Adidas} onChange={onBrandChangeHandler} name="Adidas" />
                                        <label className="form-check-label" htmlFor="Adidas">
                                            Adidas
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues["Air Jordan"]} value={sneakersBrandValues["Air Jordan"]} onChange={onBrandChangeHandler} name="Air Jordan" />
                                        <label className="form-check-label" htmlFor="Air Jordan">
                                            Air Jordan
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.Vans} value={sneakersBrandValues.Vans} onChange={onBrandChangeHandler} name="Vans" />
                                        <label className="form-check-label" htmlFor="Vans">
                                            Vans
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.Champion} value={sneakersBrandValues.Champion} onChange={onBrandChangeHandler} name="Champion" />
                                        <label className="form-check-label" htmlFor="Champion">
                                            Champion
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersBrandValues.Converse} value={sneakersBrandValues.Converse} onChange={onBrandChangeHandler} name="Converse" />
                                        <label className="form-check-label" htmlFor="Converse">
                                            Converse
                                        </label>
                                    </div>

                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Color</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.Red} value={sneakersColorValues.Red} onChange={onColorChangeHandler} name="Red" />
                                        <label className="form-check-label" htmlFor="Red">
                                            Red
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.Blue} value={sneakersColorValues.Blue} onChange={onColorChangeHandler} name="Blue" />
                                        <label className="form-check-label" htmlFor="Blue">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.Black} value={sneakersColorValues.Black} onChange={onColorChangeHandler} name="Black" />
                                        <label className="form-check-label" htmlFor="Black">
                                            Black
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.Yellow} value={sneakersColorValues.Yellow} onChange={onColorChangeHandler} name="Yellow" />
                                        <label className="form-check-label" htmlFor="Yellow">
                                            Yellow
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.Green} value={sneakersColorValues.Green} onChange={onColorChangeHandler} name="Green" />
                                        <label className="form-check-label" htmlFor="Green">
                                            Green
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.White} value={sneakersColorValues.White} onChange={onColorChangeHandler} name="White" />
                                        <label className="form-check-label" htmlFor="White">
                                            White
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersColorValues.Pink} value={sneakersColorValues.Pink} onChange={onColorChangeHandler} name="Pink" />
                                        <label className="form-check-label" htmlFor="Pink">
                                            Pink
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
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues["7"]} value={sneakersSizeValues["7"]} onChange={onSizeChangeHandler} name="7" />
                                        <label className="form-check-label" htmlFor="7">
                                            7
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues["8"]} value={sneakersSizeValues["8"]} onChange={onSizeChangeHandler} name="8" />
                                        <label className="form-check-label" htmlFor="8">
                                            8
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues["9"]} value={sneakersSizeValues["9"]} onChange={onSizeChangeHandler} name="9" />
                                        <label className="form-check-label" htmlFor="9">
                                            9
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersSizeValues["10"]} value={sneakersSizeValues["10"]} onChange={onSizeChangeHandler} name="10" />
                                        <label className="form-check-label" htmlFor="10">
                                            10
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={sneakersGenderValues["11"]} value={sneakersGenderValues["11"]} onChange={onSizeChangeHandler} name="11" />
                                        <label className="form-check-label" htmlFor="11">
                                            11
                                        </label>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <button type="submit" className="filters-btn" onClick={onApplyFiltersClick}>Apply</button>
                                <button type="submit" className="filters-btn" onClick={onResetFiltersClick}>Reset</button>
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