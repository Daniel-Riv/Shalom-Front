
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from '../page/Home';
import { Products } from '../page/Products';



export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:category" element={<Products/>}/>
        </Routes>
    </BrowserRouter>
  )
}