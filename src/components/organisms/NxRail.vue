<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="rail">
    <div v-if="slots.brand" class="rail-logo">
      <slot name="brand" />
    </div>
    <slot />
    <div v-if="slots.bottom" class="rail-bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>
