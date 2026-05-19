<script setup lang="ts">
const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <article class="post-card" @click="emit('click')">
    <slot />
  </article>
</template>
