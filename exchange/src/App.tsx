import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import Layout from "./pages/Layout/Layout";
import Notifications from "./pages/Notifications/Notifications";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
