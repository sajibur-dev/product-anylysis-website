import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Header from "./components/Header";
import NotFound from './components/NotFound';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Reviews from './pages/Reviews';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/review" element={<Reviews/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
