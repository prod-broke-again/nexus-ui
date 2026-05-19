<script setup lang="ts">
import NxIcon from "./NxIcon.vue";

withDefaults(
  defineProps<{
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    icon?: string;
  }>(),
  { type: "text", placeholder: "" },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

function onInput(ev: Event) {
  const el = ev.target as HTMLInputElement;
  emit("update:modelValue", el.value);
}
</script>

<template>
  <div v-if="icon != null && icon !== ''" class="input-wrap">
    <NxIcon :name="icon" />
    <input
      class="input with-icon"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
    />
  </div>
  <input
    v-else
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
  />
</template>
