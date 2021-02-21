import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
// import { composeWithDevTools } from "redux-devtools-extension";

import ShopNavigator from "./navigation/ShopNavigator";

import CartReducer from "./store/reducers/cart";
import ProductsReducer from "./store/reducers/products";
import OrdersReducer from "./store/reducers/orders";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  orders: OrdersReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.log}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
