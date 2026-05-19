<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "accent" | "ok" | "warn" | "err";
  }>(),
  { variant: "default" },
);

const modifierMap = {
  accent: "is-accent",
  ok: "is-ok",
  warn: "is-warn",
  err: "is-err",
} as const;
</script>

<template>
  <span class="u-pill" :class="variant !== 'default' ? modifierMap[variant] : undefined">
    <slot />
  </span>
</template>
