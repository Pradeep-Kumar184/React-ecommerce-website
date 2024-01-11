import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Cart from "./component/pages/Cart";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Privacy from "./component/pages/Privacy";
import PageNotFound from "./component/pages/PageNotFound";
import Policy from "./component/pages/Policy";
import Register from "./component/pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Read from "./component/pages/Read";
import Update from "./component/pages/Update";

function App() {
  return (
    <>
      {/* <Layout>
        <h1>Ecommerce</h1>
      </Layout> */}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/read" element={<Read></Read>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Privacy" element={<Privacy></Privacy>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
