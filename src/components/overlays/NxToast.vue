<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "ok" | "err" | "info";
  }>(),
  { variant: "info" },
);
</script>

<template>
  <div class="toast" :class="`is-${variant}`">
    <slot />
  </div>
</template>
