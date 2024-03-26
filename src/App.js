
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
import Login from './components/pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './components/pages/Payment';
import ShoppingCart from './components/pages/ShoppingCart';
import WishList from './components/pages/WishList';
import ProjectData from './ProjectData.json';
import ServiceData from './ServiceData.json';
import LearnAndAsk from './LearnAndAsk.json';
import NewsData from "./News.json"
import ProjectDetail from './components/pages/ProjectDetail';
import OurServices from './components/pages/OurServices';
import ToolProductSuggestion from './components/pages/ToolProductSuggestion';
import ToolCostSugeestion from './components/pages/ToolCostSuggestion';
import SystemCostGuide from './components/pages/SystemCostGuide';
import CreateAccount from './components/pages/CreateAccount';
import NotFound from './components/pages/NotFound';

const useLocalStorageState = (initialData, key) => {
  const localStorageState = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(initialData));
  const [state, setState] = useState(localStorageState);
  const setLocalStorageState = (newState) => {
    setState(newState)
    window.localStorage.setItem(key, JSON.stringify(newState))
  }
  return [state, setLocalStorageState]
}

function App() {
  const [wishList, setWishList] = useLocalStorageState([], "wishlist")

  const addToWishList = (product) => {
    const existingItem = wishList.find((item) => item.id === product.id)
    let addingItem;
    if (existingItem) {
      addingItem = { ...existingItem };
      const newWishList = wishList.map((item) => {
        if (item.id === existingItem) {
          return addingItem;
        } else {
          return item;
        }
      })
      setWishList(newWishList)
    } else {
      addingItem = { ...product };
      const newWishList = [...wishList, addingItem]
      setWishList(newWishList)
    }

  };

  const removeFromWishList = (product) => {
    const newWishList = wishList.filter((item) => item.id !== product.id)
    setWishList(newWishList)
  }






  const [cart, setCart] = useLocalStorageState([], "cart");

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let addingItem;
    if (existingItem) {
      addingItem = { ...existingItem, quantity: existingItem.quantity + quantity }
      const newCart = cart.map((item) => {
        if (item.id === existingItem.id) {
          return addingItem;
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      addingItem = {
        ...product,
        quantity: quantity
      }
      const newCart = [...cart, addingItem]
      setCart(newCart)
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
  }

  const increaseCartQuantity = (product) => {
    const newCart = cart.map((item) => {
      return {
        ...item,
        quantity: item.id === product.id ? item.quantity + 1 : item.quantity
      }

    })
    setCart(newCart)
  }

  const descreaseCartQuantity = (product) => {

    const newCart = cart.map((item) => {
      return {
        ...item,
        quantity: (item.id === product.id && item.quantity > 1) ? item.quantity - 1 : item.quantity
      }
    })
    setCart(newCart)
  }

  const totalCartItems = cart.reduce((acc, cur) => {
    return acc + cur.quantity
  }, 0);

  const totalCost = cart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

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

        <Headroom>   <Navbar query={query} handleInputChange={handleInputChange} totalCartItems={totalCartItems} /></Headroom>

      </div>


      <Routes>

        <Route path='/' element={<ContentSession ServiceData={ServiceData} ProjectData={ProjectData} />}></Route >
        <Route path='/our-services' element={<OurServices ServiceData={ServiceData} />}></Route >
        <Route path='/shoppingcart' element={<ShoppingCart productData={productData}
          removeFromCart={removeFromCart}
          increaseCartQuantity={increaseCartQuantity}
          descreaseCartQuantity={descreaseCartQuantity}
          totalCartItems={totalCartItems}
          totalCost={totalCost}
          cart={cart}
        />}></Route >
        <Route path='/payment' element={<Payment />}></Route >
        <Route path='/wishlist' element={<WishList productData={productData}
          removeFromWishList={removeFromWishList}
          wishList={wishList}

        />}></Route >
        <Route path='/log-in' element={<Login />}></Route >
        <Route path='/create-account' element={<CreateAccount />}></Route >
        <Route path='/learn-and-ask' element={<LearnandAsk LearnAndAsk={LearnAndAsk} />}></Route >
        <Route path='/products' element={<Products productData={productData} handleChange={handleChange} result={result} handleClickQuickView={handleClickQuickView} />}>
        </Route >
        <Route path='/products/:productCode' element={<ProductDetails productData={productData} addToCart={addToCart} addToWishList={addToWishList} />}>
        </Route >

        <Route path='/our-projects' element={<Projects ProjectData={ProjectData} />}></Route >
        <Route path='/our-projects/:id' element={<ProjectDetail ProjectData={ProjectData} />}></Route >
        <Route path='/about-us' element={<Aboutus />}></Route >

        <Route path='/news' element={<News newsData={NewsData} />}></Route >
        <Route path='/interactive-tools' element={<InteractiveTools />}></Route >
        <Route path='/interactive-tools-cost-suggesttion/' element={<ToolCostSugeestion />}></Route >
        <Route path='/system-cost-guide' element={<SystemCostGuide />}></Route >
        <Route path='/interactive-tools-product-suggesttion/' element={<ToolProductSuggestion />}></Route >
        <Route path='/contact-us' element={<ContactUs />}></Route >
        <Route path='/payment/:productCode' element={<Payment />}></Route >
        <Route path='*' element={<NotFound />}></Route >
      </Routes>



      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1000}
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
