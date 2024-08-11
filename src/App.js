// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Fav from './home/Fav';
import Cart from './home/Cart';
import Product1 from './home/Product1';
import Review from './home/Review';
import { Product1Context } from './context/Product1_context';
import Custom from './Payment/Custom';
import Pay from './Payment/Pay';
import Receipt from './Payment/Receipt';
import AddProduct from './admin/AddProduct';
import RemoveProduct from './admin/RemoveProduct';
import ProductList from './admin/ProductList';
import AdminLogin from './Authentication/AdminLogin';
import PersonalizeGift from './home/PersonalizeGift';
import AdminDashboard from './admin1/AdminDashboard';
import SellerPage from './Authentication/SellerLogin';
import Seller from './Authentication/Seller';

function App() {
  return (
    <div className="App">
      <Product1Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/frames" element={<Product1 />} />
            <Route path="/custom" element={<Custom/>} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/receipt" element={<Receipt/>} />
            <Route path="/product/:id/review" element={<Review />} /> {/* Add review page route */}
            <Route path="/buy" element={<Custom/>}></Route>
            
            <Route path="/add-product" element={<AddProduct />} />
          <Route path="/remove-product" element={<RemoveProduct />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/personalize" element={<PersonalizeGift />} />

          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/admin' element={<AdminDashboard/>} />
          <Route path='/seller' element={<Seller/>} />
          <Route path='/sellerlogin'  element={<SellerPage/>}/>
          </Routes>
        </Router>
      </Product1Context>
    </div>
  );
}

export default App;

