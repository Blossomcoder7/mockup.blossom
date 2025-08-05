import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import "./App.css";
import RenderWithSuspense from "./components/wrapper/RenderWithSuspense";
const HomePage = React.lazy(() => import("./pages/home/index/Index"));

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RenderWithSuspense>
                  <HomePage />
                </RenderWithSuspense>
              }
            />
            {/* <Route
              path="about"
              element={
                <RenderWithSuspense>
                  <HomePage />
                </RenderWithSuspense>
              }
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
