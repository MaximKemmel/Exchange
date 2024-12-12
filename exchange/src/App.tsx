import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start/Start";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Layout />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
