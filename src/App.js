import Search from "./backend/searchBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./test/Home";
import CreatePost from "./test/CreatePost";
import Login from "./test/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Teacher from "./frontend/upload";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
         <Route path="/teacher" element={<Teacher />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;