<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    label?: string;
  }>(),
  { modelValue: false, label: "" },
);

const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>

<template>
  <button
    type="button"
    class="toggle"
    role="switch"
    :aria-checked="props.modelValue"
    :aria-label="props.label || undefined"
    :class="{ 'is-on': props.modelValue }"
    @click="toggle"
  ></button>
</template>
