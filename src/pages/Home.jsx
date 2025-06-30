import React from "react";
import { Link } from "react-router-dom";
import FoodItem from "../components/products/FoodItem";
import ProductList from "../components/products/ProductList";
import MostPopular from "./MostPopular";
import MostSales from "../components/products/MostSales";
import Carousel from "react-bootstrap/Carousel";
import carousel11 from "../assests/carousel/Food 8.png";
import carousel1 from "../assests/carousel/Food 3.png";
import carousel2 from "../assests/carousel/Food 5.png";
import carousel3 from "../assests/carousel/Food 4 (1).png";
import chicken from "../pages/food-items/Authentic Mughlai Chicken Biryani Recipe – Dum….jpeg";
import pasta from "../pages/food-items/vegtable-pasta.jpeg";
import chilsoup from "../pages/food-items/chill-soup.jpeg";
import pizza from "../pages/food-items/pizza.jpeg";
import gualab from "../pages/food-items/gulab-jamun.jpeg";
import burger from "../pages/food-items/Cheese-burger.jpeg";
import coffee from "../pages/food-items/Coffee is a brewed beverage made from roasted….jpeg";
import soup from "../pages/food-items/tomatto-soup.jpeg";
import "../App.css";
import Mostpopulardata from "../components/products/Mostpopulardata";
const Home = () => {
  const ravi = "Ravi Kumar";
  const alertMessage = `Hello ${ravi}, welcome to our restaurant!`;
  return (
    <>
      <div className="osahan-home-page">
        {/* <div className="restaurant-hero">
          <h2 className="restaurant-title">
            The restaurants serves tasty dishes with fresh ingredients
          </h2>
        </div> */}
        {/* offer section slider */}
        <div style={{ width: "100%" }} className="px-4 rounded-3 border-4 mt-3">
          <Carousel
            className="rounded-4 overflow-hidden"
            style={{ height: 280, width: "100%" }}
          >
            <Carousel.Item interval={2500}>
              <img
                style={{
                  height: "280px",
                  width: "100%",
                  objectPosition: "center",
                }}
                src={carousel11}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                style={{
                  height: "280px",
                  width: "100%",
                  objectPosition: "center",
                }}
                src={carousel1}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                style={{
                  height: "280px",
                  width: "100%",
                  objectPosition: "center",
                }}
                src={carousel2}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                style={{
                  height: "280px",
                  width: "100%",
                  objectPosition: "center",
                }}
                src={carousel3}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="container mt-4 d-flex justify-content-center">
          <div className="cat-slider d-flex justify-content-between col-10">
            <Link to="/menu/biryani">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={chicken}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center text-black mt-2"> Biryanis</h5>
              </div>
            </Link>

            <Link to="/menu/pasta">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={pasta}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center  text-black mt-2">Pasta</h5>
              </div>
            </Link>
            <Link to="/menu/sweets">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={gualab}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center  text-black mt-2">Sweets</h5>
              </div>
            </Link>
            <Link to="/menu/pizza">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={pizza}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center  text-black mt-2">Pizza</h5>
              </div>
            </Link>
            <Link to="/menu/burger">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={burger}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center  text-black mt-2"> Burger</h5>
              </div>
            </Link>
            <Link to="/menu/coffee">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={soup}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center  text-black mt-2">Soup</h5>
              </div>
            </Link>
            <Link to="/menu/coffee">
              <div>
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: 110, height: 110 }}
                >
                  <img
                    src={coffee}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="text-center  text-black mt-2">Coffee</h5>
              </div>
            </Link>
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

          <div
            className=" flex-wrap d-flex col-12 "
            style={{ flexWrap: "wrap" }} // Ensures wrapping
          >
            <ProductList limit={4} category={"all"} />
          </div>
          <Link>
            <div className="container col-12 mx-auto d-flex justify-content-center">
              <img
                className=" rounded-5"
                style={{ objectFit: "contain", width: "80%" }}
                src={carousel2}
                alt=""
              />
            </div>
          </Link>
          {/* Most popular */}
          <div className="py-3 title d-flex align-items-center over-flow">
            <h5 className="m-0">Most popular</h5>
            <Link className="fw-bold ms-auto" href="most_popular.html">
              26 places <i className="feather-chevrons-right" />
            </Link>
          </div>

          {/* Most popular */}
          <div className="most_popular">
            <div
              className="row over-flow col-12"
              style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
            >
              {/* <ProductList limit={4} category={"all"} type={"most_sales"} /> */}
              <Mostpopulardata></Mostpopulardata>
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
