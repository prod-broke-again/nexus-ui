<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "primary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    iconOnly?: boolean;
  }>(),
  { variant: "default", size: "md", iconOnly: false },
);

const buttonClass = computed(() => {
  if (props.iconOnly) {
    return ["u-icon-btn", props.size === "sm" ? "is-sm" : undefined].filter(
      Boolean,
    ) as string[];
  }
  return [
    "btn",
    props.variant !== "default" ? `is-${props.variant}` : undefined,
    props.size === "sm" ? "is-sm" : props.size === "lg" ? "is-lg" : undefined,
  ].filter(Boolean) as string[];
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
