import Navbar from "./comps/navbar";
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./AnimatedRoutes";
import Btn from "./comps/btn";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Btn text="Button" /> */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
