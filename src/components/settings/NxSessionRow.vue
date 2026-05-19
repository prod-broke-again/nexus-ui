<script setup lang="ts">
withDefaults(defineProps<{ isCurrent?: boolean }>(), { isCurrent: false });

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <div
    class="session-row"
    :class="{ 'is-current': isCurrent }"
    role="button"
    tabindex="0"
    @click="emit('click')"
    @keydown.enter.prevent="emit('click')"
  >
    <slot />
  </div>
</template>
