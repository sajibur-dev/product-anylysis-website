import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Header from "./components/Header";
import About from './pages/About';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Review from './pages/Review';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
