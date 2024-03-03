import React from "react";
import { Navbar } from "../navbar";

export default function AppLayout({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
    </div>
  );
}
