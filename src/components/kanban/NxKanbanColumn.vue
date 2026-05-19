<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <section class="k-col">
    <div v-if="slots.head" class="k-col-head">
      <slot name="head" />
    </div>
    <div class="k-col-body">
      <slot />
    </div>
  </section>
</template>
