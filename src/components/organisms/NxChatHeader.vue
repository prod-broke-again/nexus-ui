<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
  }>(),
  { title: "", subtitle: "" },
);
</script>

<template>
  <header class="chat-header">
    <slot name="leading" />
    <div class="info">
      <div class="name">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="sub">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>
    <slot name="actions" />
  </header>
</template>
