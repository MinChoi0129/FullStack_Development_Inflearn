import "./App.css";
import MainPageComponent from "./main";
import UploadComponent from "./upload";
import ProductComponent from "./product";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductComponent />
          </Route>
          <Route exact={true} path="/upload">
            <UploadComponent />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
