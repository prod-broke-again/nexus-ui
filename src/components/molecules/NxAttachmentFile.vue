<script setup lang="ts">
import NxIcon from "@/components/atoms/NxIcon.vue";

defineProps<{
  name: string;
  size: string;
}>();
</script>

<template>
  <div class="att-file">
    <div class="icn">
      <slot name="icon">
        <NxIcon name="fa-solid fa-file-lines" />
      </slot>
    </div>
    <div class="fmeta">
      <div class="fname">{{ name }}</div>
      <div class="fsize">{{ size }}</div>
    </div>
    <slot name="action" />
  </div>
</template>
