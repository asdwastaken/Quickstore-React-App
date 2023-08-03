import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TshirtsComp from './components/TshirtsComp/TshirtsComp';



export default function RoutesComp() {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/t-shirts' element={<TshirtsComp />}></Route>


        </Routes>
    )
}