<script lang="ts">
  let name = "Alex";
</script>

<div class="bg-white flex">
  <input class="input" bind:value={name} />
  Hello! I can run in React, Vue, Solid, or Liquid!
</div>

<style>
  .input {
    color: red;
  }
</style>