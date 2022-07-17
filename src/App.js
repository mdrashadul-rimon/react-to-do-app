import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import NotFound from "./Components/NotFound/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Components/Login/RequireAuth";
import Navbar from "./Components/Home/Navbar";
import AddedTask from "./Components/Home/AddedTask";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/addTask"
          element={
            <RequireAuth>
              {
                <AddedTask />
              }
            </RequireAuth>
          } />

        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
