<script setup lang="ts">
const emit = defineEmits<{ backdropClick: [] }>();
</script>

<template>
  <div class="modal-backdrop" @click.self="emit('backdropClick')">
    <slot />
  </div>
</template>
