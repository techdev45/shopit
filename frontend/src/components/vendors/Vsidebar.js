import React from "react";
import { Link } from "react-router-dom";

const Vsidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/vdashboard">
              <i className="fa fa-tachometer"></i> Dashboard
            </Link>
          </li>

          <li>
            <a
              href="#productSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-product-hunt"></i> Products
            </a>
            <ul className="collapse list-unstyled" id="productSubmenu">
              <li>
                <Link to="/vendor/products">
                  <i className="fa fa-clipboard"></i> All
                </Link>
              </li>

              <li>
                <Link to="/vendor/product">
                  <i className="fa fa-plus"></i> Create
                </Link>
              </li>
            </ul>
          </li>
          {/* ......................................................... */}
          {/* <li>
            <Link to="/vendor/products">
              <i className="fa fa-clipboard"></i> All Products
            </Link>
          </li>

          <li>
            <Link to="/vendor/product">
              <i className="fa fa-plus"></i> Create Product
            </Link>
          </li> */}

          {/* ......................................................... */}

          <li>
            <Link to="/vendor/orders">
              <i className="fa fa-shopping-basket"></i> Orders
            </Link>
          </li>

          <li>
            <Link to="/vendor/reviews">
              <i className="fa fa-star"></i> Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Vsidebar;
