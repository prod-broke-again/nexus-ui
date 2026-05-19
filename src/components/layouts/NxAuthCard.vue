<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="auth-card">
    <div v-if="slots.brand" class="brand">
      <slot name="brand" />
    </div>
    <slot name="header" />
    <slot />
    <div v-if="slots.footer" class="auth-foot">
      <slot name="footer" />
    </div>
  </div>
</template>
