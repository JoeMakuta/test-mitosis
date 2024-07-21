import { useState } from "@builder.io/mitosis";
import "./index.css"

export default function MyComponent(props) {
  const [name, setName] = useState("Alex");
  // useStyle(`
  //   .bg-white{
  //     background-color: white;
  //     color : black;
  //   }
  //   .flex {
  //       display:flex;
  //   }
  //   .flex-col{
  //       flex-direction : column
  //   }
  //   input {
  //     font-size: 12px;
  //     width: 300px;
  //     height : 100px;
  //   }
  // `);

  return (
    <div class="bg-white flex flex-col">
      <input
        value={name}
        // class="bg-white"
        onChange={(event) => setName(event.target.value)}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}
