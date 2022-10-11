import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";
import "./assets/scss/style.scss";
import Home from "./pages/HomePage/Home";
import { createBrowserHistory } from "history";
import Register from "./pages/Register/register";
import CoursesList from "./pages/CoursesList/CoursesList";


export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<Home />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="course">
            <Route path=":maDanhMuc" element={<CoursesList />}></Route>
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
