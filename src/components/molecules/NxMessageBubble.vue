<script setup lang="ts">
import { useSlots } from "vue";

import NxAvatar from "@/components/atoms/NxAvatar.vue";
import NxIcon from "@/components/atoms/NxIcon.vue";

const props = withDefaults(
  defineProps<{
    author: string;
    time: string;
    avatar: string;
    color?: "c-1" | "c-2" | "c-3" | "c-4" | "c-5" | "c-6";
    isMine?: boolean;
    status?: "sent" | "read";
  }>(),
  {
    color: "c-1",
    isMine: false,
  },
);

const slots = useSlots();
</script>

<template>
  <div class="msg" :class="{ 'is-mine': props.isMine }">
    <NxAvatar :color="props.color">{{ props.avatar }}</NxAvatar>

    <div class="msg-body">
      <div class="msg-head">
        <span class="msg-author">{{ props.author }}</span>
        <span class="msg-time">{{ props.time }}</span>
        <span
          v-if="props.isMine && props.status != null"
          class="msg-status"
          :class="{ 'is-read': props.status === 'read' }"
          aria-hidden="true"
        >
          <NxIcon
            :name="
              props.status === 'read'
                ? 'fa-solid fa-check-double'
                : 'fa-solid fa-check'
            "
          />
        </span>
      </div>

      <div class="msg-bubble">
        <template v-if="slots.reply">
          <slot name="reply" />
        </template>
        <div>
          <slot />
        </div>
        <template v-if="slots.attachments">
          <slot name="attachments" />
        </template>
        <div v-if="slots.reactions" class="msg-reactions">
          <slot name="reactions" />
        </div>
      </div>
    </div>
  </div>
</template>
