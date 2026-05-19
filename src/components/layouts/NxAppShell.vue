<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "narrow" | "page";
  }>(),
  { variant: "default" },
);
</script>

<template>
  <div
    class="app"
    :class="{
      'is-narrow': variant === 'narrow',
      'is-page': variant === 'page',
    }"
  >
    <slot name="rail" />
    <slot name="sidebar" />
    <slot name="main" />
    <slot name="right" />
  </div>
</template>
