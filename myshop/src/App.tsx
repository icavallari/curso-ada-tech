import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductsLists } from "./components/ProductsLists/ProductsLists";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductsLists />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
