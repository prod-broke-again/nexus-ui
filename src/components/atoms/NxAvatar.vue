<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg" | "xl";
    color?: "c-1" | "c-2" | "c-3" | "c-4" | "c-5" | "c-6";
    isOnline?: boolean;
  }>(),
  { size: "md", color: "c-1", isOnline: false },
);

const avatarClass = computed(() => {
  const list: Array<string | false | undefined> = [];
  if (props.size === "sm") list.push("is-sm");
  if (props.size === "lg") list.push("is-lg");
  if (props.size === "xl") list.push("is-xl");
  list.push(props.color);
  if (props.isOnline) list.push("is-online");
  return list;
});
</script>

<template>
  <div class="avatar" :class="avatarClass">
    <slot />
  </div>
</template>
