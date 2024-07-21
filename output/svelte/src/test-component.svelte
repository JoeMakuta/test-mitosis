<script lang="ts">
  import "./index.css";

  let name = "Alex";
</script>

<div class="bg-white flex flex-col">
  <input bind:value={name} />
  Hello! I can run in React, Vue, Solid, or Liquid!
</div>