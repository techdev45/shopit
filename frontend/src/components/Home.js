import React, { Fragment, useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getProducts } from "../actions/productActions";

import About from "../components/layout/About";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 100000]);
  const [category, setCategory] = useState("");

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphone",
    "Food",
    "Book",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage, price, category));
  }, [dispatch, alert, error, keyword, currentPage, price, category]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products Online"} />

          <h1 id="products_heading">Latest Products</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {keyword ? (
                <Fragment>
                  <div className="col-6 col-md-3 mt-5 mb-5">
                    <div className="ps-5">
                      <Range
                        marks={{
                          1: `$1`,
                          1000: `$1000`,
                        }}
                        min={1}
                        max={1000}
                        defaultValue={[1, 1000]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      />

                      <hr className="my-5" />

                      <div className="mt-5">
                        <h4 className="mb-3">Categories</h4>

                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-9">
                    <div className="row">
                      {products &&
                        products.map((product) => (
                          <Product
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                    </div>
                  </div>
                </Fragment>
              ) : (
                products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))
              )}
            </div>
          </section>
          {resPerPage <= count && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}

      <Fragment>
        <div class="col-xl-12" id="about">
          <div class="container py-5">
            <div class="row text-center text-white">
              <div class="col-lg-8 mx-auto">
                <h1 class="display-4">Our Team</h1>
              </div>
            </div>
          </div>
          <div id="cards">
            <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm pb-5">
                <img
                  src="/images/shayan.jpeg"
                  alt=""
                  class="img-fluid  mb-3  shadow-sm"
                  id="image"
                />
                <div id="text">
                  <h5 class="mb-0">Shayn Iqbal Khan Niazi</h5>
                  <span class="small text-uppercase text-muted">
                    3811 FBAS/BSSE/F18
                  </span>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm pb-5">
                <img
                  src="/images/umair.jpeg"
                  alt=""
                  width="150"
                  class="img-fluid  mb-3  shadow-sm"
                  id="image"
                />
                <div id="text">
                  <h5 class="mb-0">Umair Khalid</h5>
                  <span class="small text-uppercase text-muted">
                    3833 FBAS/BSSE/F18
                  </span>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm pb-5">
                <img
                  src="/images/haider.jpeg"
                  alt=""
                  width="150"
                  height="150"
                  class="img-fluid mb-3  shadow-sm"
                  id="image"
                />
                <div id="text">
                  <h5 class="mb-0">Haider Naeem</h5>
                  <span class="small text-uppercase text-muted">
                    3767 FBAS/BSSE/F18
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Home;
