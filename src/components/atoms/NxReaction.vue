<script setup lang="ts">
withDefaults(
  defineProps<{
    emoji: string;
    count: number;
    isMine?: boolean;
  }>(),
  { isMine: false },
);

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button
    type="button"
    class="reaction"
    :class="{ 'is-mine': isMine }"
    @click="emit('click')"
  >
    <span>{{ emoji }}</span>
    <span>{{ count }}</span>
  </button>
</template>
