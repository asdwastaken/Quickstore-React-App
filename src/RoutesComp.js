import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';


export default function RoutesComp() {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>


        </Routes>
    )
}