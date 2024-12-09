import { Route, Routes } from "react-router-dom";
import "./assets/css/app.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import React, { Suspense } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import routes from "./constants/routes";
import Fallback from "./components/fallback/Fallback";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Suspense fallback={<Fallback />}>
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}
