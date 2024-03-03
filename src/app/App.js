import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../app/App.css";
import SubredditPage from "../pages/subredditPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SubredditPage />}>
      <Route path="r/:name" element={<SubredditPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
