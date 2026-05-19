<script setup lang="ts">
import NxIcon from "@/components/atoms/NxIcon.vue";

defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="empty">
    <div class="ei">
      <NxIcon :name="icon" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <slot name="actions" />
    <slot />
  </div>
</template>
