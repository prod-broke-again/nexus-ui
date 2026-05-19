<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="setting-row">
    <div class="smain">
      <div class="sn">{{ title }}</div>
      <div class="sd">{{ description }}</div>
    </div>
    <slot />
  </div>
</template>
