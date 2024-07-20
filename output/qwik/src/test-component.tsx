import {
  $,
  Fragment,
  component$,
  h,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";

export const MyComponent = component$((props: any) => {
  useStylesScoped$(STYLES);

  const state = useStore<any>({ name: "Alex" });

  return (
    <div class="bg-white flex">
      <input
        class="input-MyComponent"
        value={state.name}
        onChange$={$((event) => (state.name = event.target.value))}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
});

export default MyComponent;

export const STYLES = `
.input-MyComponent {
  color: red;
}
`;
