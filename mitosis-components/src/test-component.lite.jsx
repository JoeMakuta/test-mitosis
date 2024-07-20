import { useState } from "@builder.io/mitosis";

export default function MyComponent(props) {
  const [name, setName] = useState("Alex");
  // useStyle(`
  //   button {
  //     font-size: 12px;
  //     outline: 1px solid black;
  //   }
  // `);

  return (
    <div class="bg-white flex">
      <input
        css={{
          color: "red",
        }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}
