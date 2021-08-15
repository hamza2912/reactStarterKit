import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
