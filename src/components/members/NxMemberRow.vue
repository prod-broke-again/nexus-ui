<script setup lang="ts">
const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <div class="member" role="button" tabindex="0" @click="emit('click')" @keydown.enter.prevent="emit('click')">
    <slot />
  </div>
</template>
