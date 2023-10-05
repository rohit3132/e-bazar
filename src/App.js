import React, {useState} from 'react';
import './App.css';

import { getCategories } from './fetcher';

import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/Category';
import Layout from './components/layout';
import Home from './components/home';
import OrderConfirmation from "./components/orderconfirmation";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [categories, setCategories] = useState({
    errorMessage:"",  
    data: [],
  });

React.useEffect(() => {
  const fetchData = async () => {
  const responseObject =  await getCategories();
  setCategories(responseObject);
  };
fetchData();
}, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout categories={categories} />} >
        <Route index element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orderconfirmation" element={<OrderConfirmation />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="categories/:categoryId" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

