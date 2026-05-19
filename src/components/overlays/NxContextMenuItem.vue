<script setup lang="ts">
withDefaults(defineProps<{ danger?: boolean }>(), { danger: false });

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button
    type="button"
    class="ctx-item"
    :class="{ 'is-danger': danger }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
