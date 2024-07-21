import { $, Fragment, component$, h, useStore } from "@builder.io/qwik";

export const MyComponent = component$((props: any) => {
  const state = useStore<any>({ name: "Alex" });

  return (
    <div class="bg-white flex flex-col">
      <input
        value={state.name}
        onChange$={$((event) => (state.name = event.target.value))}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
});

export default MyComponent;
