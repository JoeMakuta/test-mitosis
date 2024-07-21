"use client";
import * as React from "react";
import { useState } from "react";
import "./index.css";

function MyComponent(props: any) {
  const [name, setName] = useState(() => "Alex");

  return (
    <div className="bg-white flex flex-col">
      <input value={name} onChange={(event) => setName(event.target.value)} />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}

export default MyComponent;
