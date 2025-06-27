import React from "react";
import { Link } from "react-router-dom";
import FoodItem from "../components/products/FoodItem";
import ProductList from "../components/products/ProductList";
import MostPopular from "./MostPopular";
import MostSales from "../components/products/MostSales";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../assests/carousel/carousel2.webp";
import carousel2 from "../assests/carousel/carousel3.webp";
import chicken from "../pages/food-items/Authentic Mughlai Chicken Biryani Recipe – Dum….jpeg";
import pasta from "../pages/food-items/vegtable-pasta.jpeg";
import chilsoup from "../pages/food-items/chill-soup.jpeg";
import pizza from "../pages/food-items/pizza.jpeg";
import gualab from "../pages/food-items/gulab-jamun.jpeg";
import burger from "../pages/food-items/Cheese-burger.jpeg";
import coffee from "../pages/food-items/Coffee is a brewed beverage made from roasted….jpeg";
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
        {/* Filters */}

        {/* offer sectio slider */}

        <div
          style={{ height: 250, objectFit: "cover" }}
          className="mx-5 rounded-3 border-4 mt-3"
        >
          <Carousel className="rounded-4 overflow-hidden">
            <Carousel.Item interval={2000}>
              <img
                style={{ height: 250, objectFit: "cover" }}
                src={carousel1}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{ height: 250, objectFit: "cover" }}
                src={carousel2}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{ height: 250, objectFit: "cover" }}
                src={carousel1}
                alt=""
                className="d-block w-100 rounded-3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="container mt-4 d-flex justify-content-center">
          <div className="cat-slider d-flex justify-content-between col-10">
            <div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: 130, height: 130 }}
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
              <h5 className="text-center mt-2">Chicken Biryani</h5>
            </div>
            <div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: 130, height: 130 }}
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
              <h5 className="text-center mt-2">Pasta</h5>
            </div>
            <div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: 130, height: 130 }}
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
              <h5 className="text-center mt-2">Sweets</h5>
            </div>
            <div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: 130, height: 130 }}
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
              <h5 className="text-center mt-2">Pizza</h5>
            </div>
            <div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: 130, height: 130 }}
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
              <h5 className="text-center mt-2"> Burger</h5>
            </div>
            <div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: 130, height: 130 }}
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
              <h5 className="text-center mt-2">Coffee</h5>
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
              <ProductList limit={4} category={"all"} type={"most_sales"} />
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
