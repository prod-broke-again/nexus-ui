<script setup lang="ts">
/**
 * Presentation-only FA icon shim: load FontAwesome CSS in the host app (see mock CDN).
 */

defineProps<{
  name: string;
}>();
</script>

<template>
  <i :class="name" />
</template>
