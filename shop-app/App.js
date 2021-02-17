import React from "react";
import { Text, View } from "react-native";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ProductsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: ProductsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View>...</View>
    </Provider>
  );
}
