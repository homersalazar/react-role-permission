import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthForm from "./pages/AuthForm";
import Home from "./pages/Home";
import Role from "./pages/Role";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/role" element={<Role />} />
      </Routes>
    </div>
  );
}

export default App;
