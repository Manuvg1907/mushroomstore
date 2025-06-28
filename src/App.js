import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
