<script setup lang="ts">
withDefaults(defineProps<{ isActive?: boolean }>(), { isActive: false });

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <div
    class="topic-row"
    :class="{ 'is-active': isActive }"
    role="button"
    tabindex="0"
    @click="emit('click')"
    @keydown.enter.prevent="emit('click')"
  >
    <div class="ti">
      <slot name="icon" />
    </div>
    <div class="tn">
      <slot name="title" />
    </div>
  </div>
</template>
