import './shortsComp.css';
import { shortsContext } from '../../context/shortsContext';
import { useContext } from 'react';

export default function ShortsMenus() {

    const { shorts,
        shortsCount,
        shortsBrandValues,
        shortsColorValues,
        shortsGenderValues,
        shortsSizeValues,
        onSizeChangeHandler,
        onGenderChangeHandler,
        onBrandChangeHandler,
        onColorChangeHandler,
        onSortChangeHandler,
        selectedOption,
        onResetFiltersClick,
        onApplyFiltersClick } = useContext(shortsContext);

    return (
        <div className="home-shorts-products-container">
            <div className="home-shorts-title-container">
                <h2 className="home-shorts-heading">SHORTS</h2>
                <h3 className="home-shorts-count">{shortsCount} Shorts Available</h3>
            </div>
            <div className="home-shorts-sort-filter-container">
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
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Nike} value={shortsBrandValues.Nike} onChange={onBrandChangeHandler} name="Nike" />
                                        <label className="form-check-label" htmlFor="Nike">
                                            Nike
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Jordan} value={shortsBrandValues.Jordan} onChange={onBrandChangeHandler} name="Jordan" />
                                        <label className="form-check-label" htmlFor="Jordan">
                                            Jordan
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Adidas} value={shortsBrandValues.Adidas} onChange={onBrandChangeHandler} name="Adidas" />
                                        <label className="form-check-label" htmlFor="Adidas">
                                            Adidas
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Puma} value={shortsBrandValues.Puma} onChange={onBrandChangeHandler} name="Puma" />
                                        <label className="form-check-label" htmlFor="Puma">
                                            Puma
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues["New Balance"]} value={shortsBrandValues["New Balance"]} onChange={onBrandChangeHandler} name="New Balance" />
                                        <label className="form-check-label" htmlFor="New Balance">
                                            New Balance
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues["Under Armour"]} value={shortsBrandValues["Under Armour"]} onChange={onBrandChangeHandler} name="Under Armour" />
                                        <label className="form-check-label" htmlFor="Under Armour">
                                            Under Armour
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Vans} value={shortsBrandValues.Vans} onChange={onBrandChangeHandler} name="Vans" />
                                        <label className="form-check-label" htmlFor="Vans">
                                            Vans
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Reebok} value={shortsBrandValues.Reebok} onChange={onBrandChangeHandler} name="Reebok" />
                                        <label className="form-check-label" htmlFor="Reebok">
                                            Reebok
                                        </label>
                                    </div>
                                    
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues["Levi's"]} value={shortsBrandValues["Levi's"]} onChange={onBrandChangeHandler} name="Levi's" />
                                        <label className="form-check-label" htmlFor="Levi's">
                                            Levi's
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues["Tommy Hilfiger"]} value={shortsBrandValues["Tommy Hilfiger"]} onChange={onBrandChangeHandler} name="Tommy Hilfiger" />
                                        <label className="form-check-label" htmlFor="Tommy Hilfiger">
                                            Tommy Hilfiger
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Quicksilver} value={shortsBrandValues.Quiksilver} onChange={onBrandChangeHandler} name="Quiksilver" />
                                        <label className="form-check-label" htmlFor="Quiksilver">
                                            Quiksilver
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Dockers} value={shortsBrandValues.Dockers} onChange={onBrandChangeHandler} name="Dockers" />
                                        <label className="form-check-label" htmlFor="Dockers">
                                            Dockers
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues.Bonobos} value={shortsBrandValues.Bonobos} onChange={onBrandChangeHandler} name="Bonobos" />
                                        <label className="form-check-label" htmlFor="Bonobos">
                                            Bonobos
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsBrandValues["Tommy Bahama"]} value={shortsBrandValues["Tommy Bahama"]} onChange={onBrandChangeHandler} name="Tommy Bahama" />
                                        <label className="form-check-label" htmlFor="Tommy Bahama">
                                            Tommy Bahama
                                        </label>
                                    </div>
                                    
                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Color</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Red} value={shortsColorValues.Red} onChange={onColorChangeHandler} name="Red" />
                                        <label className="form-check-label" htmlFor="Red">
                                            Red
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Blue} value={shortsColorValues.Blue} onChange={onColorChangeHandler} name="Blue" />
                                        <label className="form-check-label" htmlFor="Blue">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Black} value={shortsColorValues.Black} onChange={onColorChangeHandler} name="Black" />
                                        <label className="form-check-label" htmlFor="Black">
                                            Black
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Yellow} value={shortsColorValues.Yellow} onChange={onColorChangeHandler} name="Yellow" />
                                        <label className="form-check-label" htmlFor="Yellow">
                                            Yellow
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Green} value={shortsColorValues.Green} onChange={onColorChangeHandler} name="Green" />
                                        <label className="form-check-label" htmlFor="Green">
                                            Green
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.White} value={shortsColorValues.White} onChange={onColorChangeHandler} name="White" />
                                        <label className="form-check-label" htmlFor="White">
                                            White
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Beige} value={shortsColorValues.Beige} onChange={onColorChangeHandler} name="Beige" />
                                        <label className="form-check-label" htmlFor="Beige">
                                            Beige
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Gray} value={shortsColorValues.Gray} onChange={onColorChangeHandler} name="Gray" />
                                        <label className="form-check-label" htmlFor="Gray">
                                            Gray
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsColorValues.Khaki} value={shortsColorValues.Khaki} onChange={onColorChangeHandler} name="Khaki" />
                                        <label className="form-check-label" htmlFor="Khaki">
                                            Khaki
                                        </label>
                                    </div>

                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Gender</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsGenderValues.men} value={shortsGenderValues.men} onChange={onGenderChangeHandler} name="men" />
                                        <label className="form-check-label" htmlFor="men">
                                            Men
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsGenderValues.women} value={shortsGenderValues.women} onChange={onGenderChangeHandler} name="women" />
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
                                        <input className="form-check-input" type="checkbox" checked={shortsSizeValues["S"]} value={shortsSizeValues["S"]} onChange={onSizeChangeHandler} name="S" />
                                        <label className="form-check-label" htmlFor="S">
                                            S
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsSizeValues["M"]} value={shortsSizeValues["M"]} onChange={onSizeChangeHandler} name="M" />
                                        <label className="form-check-label" htmlFor="M">
                                            M
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsSizeValues["L"]} value={shortsSizeValues["L"]} onChange={onSizeChangeHandler} name="L" />
                                        <label className="form-check-label" htmlFor="L">
                                            L
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={shortsSizeValues["XL"]} value={shortsSizeValues["XL"]} onChange={onSizeChangeHandler} name="XL" />
                                        <label className="form-check-label" htmlFor="XL">
                                            XL
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