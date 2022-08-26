import Navbar from "./comps/navbar";
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
