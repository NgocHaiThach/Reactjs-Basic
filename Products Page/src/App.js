import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from './pages/Products';
import Menu from './components/Menu';
import { CartProvider, } from './contexts/Cart';


const Index = () => <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          {/* <Accordion heading="Heading">HaiNgocThach</Accordion> */}
          <Menu />
          {/* <h1>Hello NgocHai Thach</h1>
        <h2>Welcome to My Reatcjs</h2> */}

          <Route path="/" exact component={Index} />
          <Route path="/products/" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
