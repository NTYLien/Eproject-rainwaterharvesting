import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Headroom from "react-headroom";
import Footer from "./pages/Footer/Footer";
import ContentSession from "./pages/Home/ContentSession";
import { Route, Routes } from "react-router-dom";
import LearnAsk from "./pages/LearnAsk/LearnAsk.jsx";
import Projects from "./pages/Projects/Projects";
import Products from "./pages/Products/Products";
import News from "./pages/News/News";
import InteractiveTools from "./pages/InteractiveTools/InteractiveTools";
import Aboutus from "./pages/AboutUs/Aboutus";
import ContactUs from "./pages/ContactUs/ContactUs";
import productData from "./pages/Products/ProductData.json";
import { useState } from "react";
import ProductShow from "./pages/Products/ProductShow";
import ProductDetails from "./pages/Products/ProductDetails";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./pages/ShoppingCart/Payment";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import WishList from "./pages/WishList/WishList";
import ProjectData from "./pages/Projects/ProjectData.json";
import ServiceData from "./pages/Services/ServiceData.json";
import LearnAskData from "./pages/LearnAsk/LearnAskData.json";
import NewsData from "./pages/News/NewsData.json";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import OurServices from "./pages/Services/OurServices";
import ToolProductSuggestion from "./pages/InteractiveTools/ToolProductSuggestion";
import ToolCostSugeestion from "./pages/InteractiveTools/ToolCostSuggestion";
import SystemCostGuide from "./pages/InteractiveTools/SystemCostGuide";
import CreateAccount from "./pages/Login/CreateAccount";
import NotFound from "./pages/Others/NotFound";
import ThankYou from "./pages/Others/ThankYou";

const useLocalStorageState = (initialData, key) => {
  const localStorageState = JSON.parse(
    window.localStorage.getItem(key) || JSON.stringify(initialData),
  );
  const [state, setState] = useState(localStorageState);
  const setLocalStorageState = (newState) => {
    setState(newState);
    window.localStorage.setItem(key, JSON.stringify(newState));
  };
  return [state, setLocalStorageState];
};

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const isUserLoggedIn = loggedUser != null;
  const logOut = () => {
    setLoggedUser(null);
  };

  const [wishList, setWishList] = useLocalStorageState([], "wishlist");

  const addToWishList = (product) => {
    const existingItem = wishList.find((item) => item.id === product.id);
    let addingItem;
    if (existingItem) {
      addingItem = { ...existingItem };
      const newWishList = wishList.map((item) => {
        if (item.id === existingItem) {
          return addingItem;
        } else {
          return item;
        }
      });
      setWishList(newWishList);
    } else {
      addingItem = { ...product };
      const newWishList = [...wishList, addingItem];
      setWishList(newWishList);
    }
  };

  const totalWishListItem = wishList.length;
  const removeFromWishList = (product) => {
    const newWishList = wishList.filter((item) => item.id !== product.id);
    setWishList(newWishList);
  };

  const [cart, setCart] = useLocalStorageState([], "cart");

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let addingItem;
    if (existingItem) {
      addingItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
      const newCart = cart.map((item) => {
        if (item.id === existingItem.id) {
          return addingItem;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      addingItem = {
        ...product,
        quantity: quantity,
      };
      const newCart = [...cart, addingItem];
      setCart(newCart);
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  const increaseCartQuantity = (product) => {
    const newCart = cart.map((item) => {
      return {
        ...item,
        quantity: item.id === product.id ? item.quantity + 1 : item.quantity,
      };
    });
    setCart(newCart);
  };

  const descreaseCartQuantity = (product) => {
    const newCart = cart.map((item) => {
      return {
        ...item,
        quantity:
          item.id === product.id && item.quantity > 1
            ? item.quantity - 1
            : item.quantity,
      };
    });
    setCart(newCart);
  };

  const totalCartItems = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const totalCost = cart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Search Filter

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = productData.filter(
    (product) =>
      product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
        -1 ||
      product.category
        .toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase()) !== -1,
  );

  // Category Filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button Filter
  const handleClickQuickView = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, type, name }) =>
          category === selected || type === selected || name === selected,
      );
    }

    return filteredProducts.map(
      ({
        id,
        name,
        productCode,
        price,
        imgurl,
        description,
        type,
        category,
        storageCapacity,
        material,
        location,
        purpose,
        features1,
        features2,
        features3,
        features4,
        features5,
        features6,
      }) => (
        <ProductShow
          key={id}
          name={name}
          productCode={productCode}
          price={price}
          imgurl={imgurl}
          description={description}
          type={type}
          purpose={purpose}
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
        />
      ),
    );
  }

  const result = filteredData(productData, selectedCategory, query);

  return (
    <div className="App">
      <div className="Container">
        <Headroom>
          {" "}
          <Navbar
            query={query}
            handleInputChange={handleInputChange}
            totalCartItems={totalCartItems}
            totalWishListItem={totalWishListItem}
            isUserLoggedIn={isUserLoggedIn}
            logOut={logOut}
          />
        </Headroom>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <ContentSession
              ServiceData={ServiceData}
              ProjectData={ProjectData}
            />
          }
        ></Route>
        <Route
          path="/our-services"
          element={<OurServices ServiceData={ServiceData} />}
        ></Route>
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              productData={productData}
              removeFromCart={removeFromCart}
              increaseCartQuantity={increaseCartQuantity}
              descreaseCartQuantity={descreaseCartQuantity}
              totalCartItems={totalCartItems}
              totalCost={totalCost}
              cart={cart}
              isUserLoggedIn={isUserLoggedIn}
            />
          }
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route
          path="/wishlist"
          element={
            <WishList
              productData={productData}
              removeFromWishList={removeFromWishList}
              wishList={wishList}
              totalWishListItem={totalWishListItem}
            />
          }
        ></Route>
        <Route
          path="/log-in"
          element={<Login setLoggedUser={setLoggedUser} />}
        ></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route
          path="/learn-and-ask"
          element={<LearnAsk LearnAskData={LearnAskData} />}
        ></Route>
        <Route
          path="/products"
          element={
            <Products
              productData={productData}
              handleChange={handleChange}
              result={result}
              handleClickQuickView={handleClickQuickView}
            />
          }
        ></Route>
        <Route
          path="/products/:productCode"
          element={
            <ProductDetails
              productData={productData}
              addToCart={addToCart}
              addToWishList={addToWishList}
              isUserLoggedIn={isUserLoggedIn}
            />
          }
        ></Route>

        <Route
          path="/our-projects"
          element={<Projects ProjectData={ProjectData} />}
        ></Route>
        <Route
          path="/our-projects/:id"
          element={<ProjectDetail ProjectData={ProjectData} />}
        ></Route>
        <Route path="/about-us" element={<Aboutus />}></Route>

        <Route path="/news" element={<News newsData={NewsData} />}></Route>
        <Route path="/interactive-tools" element={<InteractiveTools />}></Route>
        <Route
          path="/interactive-tools/interactive-tools-cost-suggestion"
          element={<ToolCostSugeestion />}
        ></Route>
        <Route
          path="/interactive-tools/interactive-tools-cost-suggestion/system-cost-guide"
          element={<SystemCostGuide />}
        ></Route>
        <Route
          path="/interactive-tools/interactive-tools-product-suggestion"
          element={<ToolProductSuggestion productData={productData} />}
        ></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/payment/:productCode" element={<Payment />}></Route>
        <Route path="/thankyou" element={<ThankYou />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={100}
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
    </div>
  );
}

export default App;
