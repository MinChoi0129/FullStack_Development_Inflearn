import "./App.css";
import MainPageComponent from "./main";
import UploadComponent from "./upload";
import ProductComponent from "./product";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductComponent/>
        </Route>
        <Route exact={true} path="/upload">
          <UploadComponent/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
