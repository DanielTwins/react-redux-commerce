import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import necessary components from react-router-dom
import "./App.css";
import Navbar from "./components/global/Navbar";
import ProductDetails from "./containers/ProductDetails";
import Home from "./pages/Home";
import Footer from "../src/components/global/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="app">
      <Router> {/* Use the BrowserRouter component as the top-level container */}
        <Navbar /> {/* Render the navbar component */}
        <Routes> {/* Use the Routes component to define the app's routing */}
          <Route path="/" exact element={<Home />} /> {/* Define the home page route */}
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />} // Define the product details route that takes in a parameter
          />
          <Route path="/about" exact element={<About />} /> {/* Define the about page route */}
          <Route path="/services" exact element={<Services />} /> {/* Define the services page route */}
          <Route path="/contact" exact element={<Contact />} /> {/* Define the contact page route */}
          <Route>The page doesn't found!</Route> {/* Define the 404 page */}
        </Routes>
        <ScrollToTop /> {/* Render the ScrollToTop component */}
        <Footer /> {/* Render the footer component */}
      </Router>
    </div>
  );
}

export default App;
