import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import Ads from "./Ads";
import Trader from "./Trader";
import Home from "./Home";
import AdsDetails from "./AdsDetails";
import About from "./About";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/ads" element={<Ads />} />
          <Route path="/trader" element={<Trader />} />
          <Route path="/trader/ads/" element={<Trader />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/details" element={<AdsDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
