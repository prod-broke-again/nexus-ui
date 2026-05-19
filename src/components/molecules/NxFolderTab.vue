<script setup lang="ts">
import NxBadge from "@/components/atoms/NxBadge.vue";
import NxIcon from "@/components/atoms/NxIcon.vue";

const props = withDefaults(
  defineProps<{
    name: string;
    icon: string;
    count?: number;
    isActive?: boolean;
  }>(),
  { count: 0, isActive: false },
);

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button
    type="button"
    class="folder-tab"
    :class="{ 'is-active': props.isActive }"
    @click="emit('click')"
  >
    <NxIcon :name="props.icon" />
    {{ props.name }}
    <NxBadge v-if="props.count > 0" variant="muted">{{ props.count }}</NxBadge>
  </button>
</template>
