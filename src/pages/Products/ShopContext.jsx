import React, { createContext } from "react";
import productData from "../Products/ProductData.json";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { productData };
  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
