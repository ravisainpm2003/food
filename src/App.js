import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Maintainon from "./pages/Maintenon";
import Map from "./pages/Map";
import MostPopular from "./pages/MostPopular";
import MyOrder from "./pages/MyOrder";
import NotFound from "./pages/NotFound";
import Offer from "./pages/Offer";
import Privacy from "./pages/Privacy";
import Profile from "./pages/Profile";
import Restaurant from "./pages/Restaurant";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import StatusCanceled from "./pages/StatusCanceled";
import StatusCompleted from "./pages/StatusCompleted";
import StatusOnProcess from "./pages/StatusOnProcess";
import Successful from "./pages/Successful";
import Terms from "./pages/Terms";
import Trending from "./pages/Trending";
import Verification from "./pages/Verification";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import AppTheme from "./components/utilities/AppTheme";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import ProfileTheme from "./components/utilities/ProfileTheme";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import MenuItems from "./pages/MenuItems";
import Skelton from "./components/skelton/Skelton";
import Homeskelton from "./components/skelton/Homeskelton";
import Resturantskel from "./components/skelton/Resturantskel";
import Searchskel from "./components/skelton/Searchskel";
import ForgotPassword2 from "./pages/ForgotPassword2";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes without AppTheme */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/forgot-password-step2" element={<ForgotPassword2 />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Routes with AppTheme */}
        <Route
          path="*"
          element={
            <AppTheme>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Location />} />
                <Route path="/maintainon" element={<Maintainon />} />
                <Route path="/map" element={<Map />} />
                <Route path="/most-popular" element={<MostPopular />} />
                <Route path="/my-orders" element={<MyOrder />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/restaurant/:id" element={<Restaurant />} />
                <Route path="/search" element={<Search />} />
                <Route path="/status-cancel" element={<StatusCanceled />} />
                <Route path="/status-completed" element={<StatusCompleted />} />
                <Route
                  path="/status-on-process/:orderId"
                  element={<StatusOnProcess />}
                />
                <Route path="/success" element={<Successful />} />
                <Route path="/trending/:category" element={<Trending />} />
                <Route path="/trending" element={<Trending />} />

                <Route path="/verification" element={<Verification />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/menu/:food" element={<MenuItems />} />
                <Route path="/sai" element={<Skelton />} />
                <Route path="/ss" element={<Searchskel />} />

                {/* Profile-related routes with ProfileTheme */}
                <Route
                  path="/privacy"
                  element={
                    <ProfileTheme>
                      <Privacy />
                    </ProfileTheme>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <ProfileTheme>
                      <ContactUs />
                    </ProfileTheme>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <ProfileTheme>
                      <ContactUs />
                    </ProfileTheme>
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <ProfileTheme>
                      <Faq />
                    </ProfileTheme>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProfileTheme>
                      <Profile />
                    </ProfileTheme>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <ProfileTheme>
                      <Terms />
                    </ProfileTheme>
                  }
                />

                {/* Fallback route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppTheme>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
