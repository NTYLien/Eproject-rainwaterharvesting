
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
        <Route path='/' element={<ContentSession />}></Route >
        <Route path='/learn-and-ask' element={<LearnandAsk />}></Route >
        <Route path='/products' element={<Products productData={productData} handleChange={handleChange} result={result} />}>
        </Route >

        <Route path='/products/:productCode' element={<ProductDetails productData={productData}
        />}>
        </Route >
        <Route path='/our-projects' element={<Projects />}></Route >
        <Route path='/about-us' element={<Aboutus />}></Route >
        <Route path='/news' element={<News />}></Route >
        <Route path='/interactive-tools' element={<InteractiveTools />}></Route >
        <Route path='/contact-us' element={<ContactUs />}></Route >
      </Routes>

      <Footer />
    </div >












  );
}

export default App;
