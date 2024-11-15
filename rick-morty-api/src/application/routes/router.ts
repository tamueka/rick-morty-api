import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../../App";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default AppRoutes;
