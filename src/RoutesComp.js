import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TshirtsComp from './components/TshirtsComp/TshirtsComp';
import ShortsComp from './components/ShortsComp/ShortsComp';
import Cart from './components/Cart/Cart';



export default function RoutesComp() {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/t-shirts' element={<TshirtsComp />}></Route>
            <Route path='/shorts' element={<ShortsComp />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}