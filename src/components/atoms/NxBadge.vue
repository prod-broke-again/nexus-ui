<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "muted";
  }>(),
  { variant: "default" },
);
</script>

<template>
  <span class="u-badge" :class="{ 'is-muted': variant === 'muted' }">
    <slot />
  </span>
</template>
