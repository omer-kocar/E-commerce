import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardProvider } from "./context/Context";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <div className="App">
          <ShoppingCart/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </div>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
