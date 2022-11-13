import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import UploadComponent from "./upload";
import ProductComponent from "./product";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={() => {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </Button>
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
