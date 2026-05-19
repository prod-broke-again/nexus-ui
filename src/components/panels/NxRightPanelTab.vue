<script setup lang="ts">
withDefaults(defineProps<{ isActive?: boolean }>(), { isActive: false });

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button
    type="button"
    class="right-tab"
    :class="{ 'is-active': isActive }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
