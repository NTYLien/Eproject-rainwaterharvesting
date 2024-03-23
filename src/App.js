
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Headroom from 'react-headroom';
import Footer from './components/Footer';
import ContentSession from './components/ContentSession';
import { Route, Routes } from 'react-router-dom';
import LearnandAsk from './components/pages/LearnandAsk';
import Projects from './components/pages/Projects';
import Products from './components/pages/Products';
import News from './components/pages/News';
import InteractiveTools from './components/pages/InteractiveTools';
import Aboutus from './components/pages/Aboutus';
import ContactUs from './components/pages/ContactUs';
import productData from './ProductData.json';
import { useState } from 'react';
import ProductShow from './components/ProductShow';
import ProductDetails from './components/pages/ProductDetails';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './components/pages/Payment';
import ShoppingCart from './components/pages/ShoppingCart';
import WishList from './components/pages/WishList';
import ProjectData from './ProjectData.json';
import ServiceData from './ServiceData.json';
import ProjectDetail from './components/pages/ProjectDetail';
import OurServices from './components/pages/OurServices';
import ScrollToTop from './components/ScrollTopTop';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");


  // Search Filter

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }


  const filteredItems = productData.filter(product => product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 || product.category.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  // Category Filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Button Filter
  const handleClickQuickView = (e) => {
    setSelectedCategory(e.target.value)
  }


  function filteredData(products, selected, query) {
    let filteredProducts = products;



    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    // Selected
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, type, name }) =>
        category === selected
        || type === selected
        || name === selected);

    }




    return filteredProducts.map(({ id, name, productCode, price, imgurl, description, type, category, storageCapacity, material, location, features1, features2, features3, features4, features5, features6 }) => (<ProductShow


      key={id}
      name={name}
      productCode={productCode}
      price={price}
      imgurl={imgurl}
      description={description}
      type={type}
      category={category}
      storageCapacity={storageCapacity}
      material={material}
      location={location}
      features1={features1}
      features2={features2}
      features3={features3}
      features4={features4}
      features5={features5}
      features6={features6}

    />)
    );

  }

  const result = filteredData(productData, selectedCategory, query);









  return (
    <div className="App">
      <div className='Container'>
        <Headroom>   <Navbar query={query} handleInputChange={handleInputChange} /></Headroom>
      </div>

      <Routes>

        <Route path='/' element={<ContentSession ServiceData={ServiceData} ProjectData={ProjectData} />}></Route >
        <Route path='/shoppingcart' element={<ShoppingCart />}></Route >
        <Route path='/wishlist' element={<WishList />}></Route >
        <Route path='/learn-and-ask' element={<LearnandAsk />}></Route >
        <Route path='/products' element={<Products productData={productData} handleChange={handleChange} result={result} handleClickQuickView={handleClickQuickView} />}>
        </Route >
        <Route path='/products/:productCode' element={<ProductDetails productData={productData} />}>
        </Route >

        <Route path='/our-projects' element={<Projects ProjectData={ProjectData} />}></Route >
        <Route path='/our-projects/:id' element={<ProjectDetail ProjectData={ProjectData} />}></Route >
        <Route path='/about-us' element={<Aboutus />}></Route >
        <Route path='/about-us/our-services' element={<OurServices />}></Route >
        <Route path='/news' element={<News />}></Route >
        <Route path='/interactive-tools' element={<InteractiveTools />}></Route >
        <Route path='/contact-us' element={<ContactUs />}></Route >
        <Route path='/payment/:productCode' element={<Payment />}></Route >
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />








    </div >












  );
}

export default App;
