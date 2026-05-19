<template>
  <div class="page-shell">
    <slot name="rail" />
    <aside class="page-sidebar">
      <slot name="sidebar" />
    </aside>
    <div class="page-main">
      <slot name="main" />
    </div>
  </div>
</template>
