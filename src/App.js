import ProductContextData from "./ProductContext"
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
import ProductListingPage from "./page/ProductListingPage"
import AddProductPage from "./page/AddProductPage"
import EditProductPage from "./page/EditProductPage"
import DeleteProductPage from "./page/DeleteProductPage"

export default function App() {
  return <div className="container">
    <ProductContextData>
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">All Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Product</Link>
              </li>
            </ul>
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:productId" element={<EditProductPage/>} />
          <Route path="/delete/:productId" element={<DeleteProductPage/>} />
        </Routes>
      </Router>
    </ProductContextData>

  </div>
}