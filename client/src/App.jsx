import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound"
import Header from "./components/Header";

function App() {

  return <div className="">
    <Header />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

  </div>

}

export default App
