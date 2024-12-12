<script>
  import Logo from "./Logo.svelte";
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
  <Logo />
  <main>
    <slot></slot>
    <!-- The slot component works the same as the outlet in react, so if in our layout we have a page enclosing the children
     the children won't be shown whenever we enter a page with that layout, because for it to show we need to use the <slot>
     component -->
  </main>
</div>
