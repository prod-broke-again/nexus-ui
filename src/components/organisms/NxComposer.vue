<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
  }>(),
  { modelValue: "", placeholder: "" },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
  send: [];
}>();

function syncHeight(el: HTMLTextAreaElement) {
  el.style.height = "auto";
  el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
}

function onInput(ev: Event) {
  const el = ev.target as HTMLTextAreaElement;
  emit("update:modelValue", el.value);
  syncHeight(el);
}

function onKeydown(ev: KeyboardEvent) {
  if (ev.key === "Enter" && !ev.shiftKey) {
    ev.preventDefault();
    emit("send");
  }
}
</script>

<template>
  <div class="composer">
    <div class="composer-inner">
      <slot name="prepend" />
      <textarea
        class="composer-input"
        :placeholder="placeholder"
        :value="modelValue"
        rows="1"
        @input="onInput"
        @keydown="onKeydown"
      />
      <div class="composer-actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
