import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import Orders from './pages/UserPages/Orders';
import Wallet from './pages/UserPages/Wallet';
import Profile from './pages/UserPages/Profile';
import Message from './pages/UserPages/Message';
import WishList from './pages/UserPages/WishList';
import StartSell from './pages/StartSell/StartSell';
import Response from './pages/UserPages/Response';
import CatalogPage from './pages/Catalog/CatalogPage';
import CatalogCategoryPage from './pages/Catalog/CatalogCategoryPage';
import SpecificCategoryPage from './pages/Catalog/SpecificCategoryPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/myProfile' element={<Profile />} />
          <Route path="/myOrders" element={<Orders />} />
          <Route path='/myWishList' element={<WishList />} />
          <Route path='/myWallet' element={<Wallet />} />
          <Route path='/startSell' element={<StartSell />} />
          <Route path='/myMessage' element={<Message />} />
          <Route path='/myResponse' element={<Response />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:category' element={<CatalogCategoryPage />} />
          <Route path="/catalog/:category/:subCategory" element={<SpecificCategoryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
