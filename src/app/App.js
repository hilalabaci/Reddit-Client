import React from "react";
import "../app/App.css";
import { SubredditsList } from "../components/subredditsList";
import AppLayout from "./AppLayout";

function App() {
  return (
    <AppLayout>
      <div>
        <SubredditsList />
      </div>
    </AppLayout>
  );
}

export default App;
