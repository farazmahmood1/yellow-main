import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Photospage from './Components/PhotoPage/PhotoSection';
import Videospage from './Components/VideoPage/VideoSection';
import Footer from "./Components/Layout/Footer/Footer";
import Contact from "./Components/HomePage/Contact/Contact";
import Blog from "./Components/BlogPage/Blog";
import SingleBlog from "./Components/SingleBlogPage/SingleBlog";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/photos' element={<Photospage />} />
          <Route path='/videos' element={<Videospage />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blog-details' element={<SingleBlog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
