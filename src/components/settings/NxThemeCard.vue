<script setup lang="ts">
withDefaults(defineProps<{ isActive?: boolean }>(), { isActive: false });

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button
    type="button"
    class="theme-card"
    :class="{ 'is-active': isActive }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
