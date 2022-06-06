import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmailLog from "./backend/login-email";
import TeacherPortal from "./backend/Upload-system.js"
import Login from "./test/Login";

import Search from "./backend/searchBar";


function App() {
  return (
    <>
    <TeacherPortal />
    </>
  );
};

export default App;