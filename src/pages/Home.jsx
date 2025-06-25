import React from "react";
import { Link } from "react-router-dom";
import FoodItem from "../components/products/FoodItem";
import ProductList from "../components/products/ProductList";
import MostPopular from "./MostPopular";
import MostSales from "../components/products/MostSales";

const Home = () => {
  const ravi = "Ravi Kumar";
  const alertMessage = `Hello ${ravi}, welcome to our restaurant!`;
  return (
    <>
      <div className="osahan-home-page">
        <div className="restaurant-hero">
          <h2 className="restaurant-title">The restaurants serves</h2>
        </div>
        {/* Filters */}
        <div className="container mt-2">
          <div className="cat-slider d-flex">
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/fries"
              >
                <img
                  alt="#"
                  src="img/icons/Fries.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Fries</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/pizza"
              >
                <img
                  alt="#"
                  src="img/icons/Pizza.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Pizza</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/burger"
              >
                <img
                  alt="#"
                  src="img/icons/Burger.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Burger</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/sandwich"
              >
                <img
                  alt="#"
                  src="img/icons/Sandwich.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Sandwich</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/coffee"
              >
                <img
                  alt="#"
                  src="img/icons/Coffee.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Coffee</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/steak"
              >
                <img
                  alt="#"
                  src="img/icons/Steak.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Steak</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/cola"
              >
                <img
                  alt="#"
                  src="img/icons/ColaCan.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">ColaCan</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="menu"
              >
                <img
                  alt="#"
                  src="img/icons/Breakfast.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Breakfast</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link
                className="bg-white rounded d-block p-2 text-center shadow-sm"
                to="/menu/salad"
              >
                <img
                  alt="#"
                  src="img/icons/Salad.png"
                  className="img-fluid mb-2"
                />
                <p className="m-0 small">Salad</p>
              </Link>
            </div>
          </div>
        </div>
        {/* offer sectio slider */}
        <div className="bg-white">
          <div className="container">
            <div className="offer-slider d-flex">
              <div className="cat-item px-1 py-3">
                <Link className="d-block text-center shadow-sm" to="trending">
                  <img
                    alt="#"
                    src="img/pro1.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link className="d-block text-center shadow-sm" to="trending">
                  <img
                    alt="#"
                    src="img/pro2.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link className="d-block text-center shadow-sm" to="trending">
                  <img
                    alt="#"
                    src="img/pro3.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link className="d-block text-center shadow-sm" to="trending">
                  <img
                    alt="#"
                    src="img/pro4.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link className="d-block text-center shadow-sm" to="trending">
                  <img
                    alt="#"
                    src="img/pro2.jpg"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Trending this week */}
          <div className="pt-4 pb-2 title d-flex align-items-center">
            <h5 className="m-0">Trending this week</h5>
            <Link className="fw-bold ms-auto" to="trending">
              View all <i className="feather-chevrons-right" />
            </Link>
          </div>
          {/* slider */}
          <div className="over-flow ">
            <ProductList limit={4} category={"all"} />
          </div>
          {/* Most popular */}
          <div className="py-3 title d-flex align-items-center">
            <h5 className="m-0">Most popular</h5>
            <Link className="fw-bold ms-auto" href="most_popular.html">
              26 places <i className="feather-chevrons-right" />
            </Link>
          </div>
          {/* Most popular */}
          <div className="most_popular">
            <div className="row over-flow d-flex">
              <ProductList limit={4} category={"all"} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <MostSales />
      </div>
    </>
  );
};

export default Home;
