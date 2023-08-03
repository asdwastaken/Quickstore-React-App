import './tshirtsComp.css';
import { tShirtsContext } from '../../context/tShirtsContext';
import { useContext } from 'react';

export default function TshirtsMenus() {

    const { tShirts,
        tShirtsCount,
        tShirtsBrandValues,
        tShirtsColorValues,
        tShirtsGenderValues,
        tShirtsSizeValues,
        onSizeChangeHandler,
        onGenderChangeHandler,
        onBrandChangeHandler,
        onColorChangeHandler,
        onSortChangeHandler,
        selectedOption,
        onResetFiltersClick,
        onApplyFiltersClick } = useContext(tShirtsContext);

    return (
        <div className="home-t-shirts-products-container">
            <div className="home-t-shirts-title-container">
                <h2 className="home-t-shirts-heading">T-SHIRTS</h2>
                <h3 className="home-t-shirts-count">{tShirtsCount} {tShirtsCount == 1 ? "T-Shirt" : "T-Shirts"} Available</h3>
            </div>
            <div className="home-t-shirts-sort-filter-container">
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
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues.Nike} value={tShirtsBrandValues.Nike} onChange={onBrandChangeHandler} name="Nike" />
                                        <label className="form-check-label" htmlFor="Nike">
                                            Nike
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues.Adidas} value={tShirtsBrandValues.Adidas} onChange={onBrandChangeHandler} name="Adidas" />
                                        <label className="form-check-label" htmlFor="Adidas">
                                            Adidas
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues.Puma} value={tShirtsBrandValues.Puma} onChange={onBrandChangeHandler} name="Puma" />
                                        <label className="form-check-label" htmlFor="Puma">
                                            Puma
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues["New Balance"]} value={tShirtsBrandValues["New Balance"]} onChange={onBrandChangeHandler} name="New Balance" />
                                        <label className="form-check-label" htmlFor="New Balance">
                                            New Balance
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues["Under Armour"]} value={tShirtsBrandValues["Under Armour"]} onChange={onBrandChangeHandler} name="Under Armour" />
                                        <label className="form-check-label" htmlFor="Under Armour">
                                            Under Armour
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues.Vans} value={tShirtsBrandValues.Vans} onChange={onBrandChangeHandler} name="Vans" />
                                        <label className="form-check-label" htmlFor="Vans">
                                            Vans
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues.Reebok} value={tShirtsBrandValues.Reebok} onChange={onBrandChangeHandler} name="Reebok" />
                                        <label className="form-check-label" htmlFor="Reebok">
                                            Reebok
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsBrandValues.Converse} value={tShirtsBrandValues.Converse} onChange={onBrandChangeHandler} name="Converse" />
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
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Red} value={tShirtsColorValues.Red} onChange={onColorChangeHandler} name="Red" />
                                        <label className="form-check-label" htmlFor="Red">
                                            Red
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Blue} value={tShirtsColorValues.Blue} onChange={onColorChangeHandler} name="Blue" />
                                        <label className="form-check-label" htmlFor="Blue">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Black} value={tShirtsColorValues.Black} onChange={onColorChangeHandler} name="Black" />
                                        <label className="form-check-label" htmlFor="Black">
                                            Black
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Yellow} value={tShirtsColorValues.Yellow} onChange={onColorChangeHandler} name="Yellow" />
                                        <label className="form-check-label" htmlFor="Yellow">
                                            Yellow
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Green} value={tShirtsColorValues.Green} onChange={onColorChangeHandler} name="Green" />
                                        <label className="form-check-label" htmlFor="Green">
                                            Green
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.White} value={tShirtsColorValues.White} onChange={onColorChangeHandler} name="White" />
                                        <label className="form-check-label" htmlFor="White">
                                            White
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Beige} value={tShirtsColorValues.Beige} onChange={onColorChangeHandler} name="Beige" />
                                        <label className="form-check-label" htmlFor="Beige">
                                            Beige
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsColorValues.Gray} value={tShirtsColorValues.Gray} onChange={onColorChangeHandler} name="Gray" />
                                        <label className="form-check-label" htmlFor="Gray">
                                            Gray
                                        </label>
                                    </div>

                                </ul>
                            </li>

                            <li className="dropend">
                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">Gender</a>
                                <ul className="dropdown-menu">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsGenderValues.men} value={tShirtsGenderValues.men} onChange={onGenderChangeHandler} name="men" />
                                        <label className="form-check-label" htmlFor="men">
                                            Men
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsGenderValues.women} value={tShirtsGenderValues.women} onChange={onGenderChangeHandler} name="women" />
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
                                        <input className="form-check-input" type="checkbox" checked={tShirtsSizeValues["S"]} value={tShirtsSizeValues["S"]} onChange={onSizeChangeHandler} name="S" />
                                        <label className="form-check-label" htmlFor="S">
                                            S
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsSizeValues["M"]} value={tShirtsSizeValues["M"]} onChange={onSizeChangeHandler} name="M" />
                                        <label className="form-check-label" htmlFor="M">
                                            M
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsSizeValues["L"]} value={tShirtsSizeValues["L"]} onChange={onSizeChangeHandler} name="L" />
                                        <label className="form-check-label" htmlFor="L">
                                            L
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked={tShirtsSizeValues["XL"]} value={tShirtsSizeValues["XL"]} onChange={onSizeChangeHandler} name="XL" />
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