import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import {
  Home,
  About,
  Contact,
  SignUp,
  Login,
  Products,
  Cart,
  Product,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="product" element={<Product />} />

        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
