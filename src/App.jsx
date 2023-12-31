import { BrowserRouter } from "react-router-dom";
import { Display } from "./components/Display";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative z-0">
          <Display />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
