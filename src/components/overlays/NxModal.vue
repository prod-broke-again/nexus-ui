<script setup lang="ts">
import { useSlots } from "vue";

withDefaults(
  defineProps<{
    size?: "md" | "lg";
  }>(),
  { size: "md" },
);

const slots = useSlots();
</script>

<template>
  <div class="modal" :class="{ 'is-lg': size === 'lg' }">
    <div v-if="slots.head" class="modal-head">
      <slot name="head" />
    </div>
    <div class="modal-body">
      <slot name="body" />
    </div>
    <div v-if="slots.foot" class="modal-foot">
      <slot name="foot" />
    </div>
  </div>
</template>
