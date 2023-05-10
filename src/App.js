import { Button } from "react-bootstrap";
import "./App.css";
import { ToastContaine, ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Registration } from "./pages/registration/Registration";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
