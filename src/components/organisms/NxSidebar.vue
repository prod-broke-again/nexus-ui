<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="sidebar">
    <div v-if="slots.head" class="sidebar-head">
      <slot name="head" />
    </div>
    <div v-if="slots.tabs" class="folder-tabs">
      <slot name="tabs" />
    </div>
    <div class="chat-list">
      <slot />
    </div>
  </div>
</template>
