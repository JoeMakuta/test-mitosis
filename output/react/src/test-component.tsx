"use client";
import * as React from "react";
import { useState } from "react";

function MyComponent(props: any) {
  const [name, setName] = useState(() => "Alex");

  return (
    <>
      <div className="bg-white flex">
        <input
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        Hello! I can run in React, Vue, Solid, or Liquid!
      </div>
      <style jsx>{`
        .input {
          color: red;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
