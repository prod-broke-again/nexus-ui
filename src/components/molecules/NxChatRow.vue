<script setup lang="ts">
import NxAvatar from "@/components/atoms/NxAvatar.vue";
import NxBadge from "@/components/atoms/NxBadge.vue";
import NxIcon from "@/components/atoms/NxIcon.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    time: string;
    preview: string;
    avatar: string;
    color?: "c-1" | "c-2" | "c-3" | "c-4" | "c-5" | "c-6";
    isOnline?: boolean;
    unread?: number;
    isPinned?: boolean;
    isTyping?: boolean;
    isMuted?: boolean;
    isActive?: boolean;
  }>(),
  {
    color: "c-1",
    isOnline: false,
    unread: 0,
    isPinned: false,
    isTyping: false,
    isMuted: false,
    isActive: false,
  },
);

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <div
    class="chat-row"
    :class="{ 'is-active': props.isActive, 'is-pinned': props.isPinned }"
    @click="emit('click')"
  >
    <NxAvatar size="lg" :color="props.color" :is-online="props.isOnline">{{
      props.avatar
    }}</NxAvatar>

    <div class="meta">
      <div class="row-1">
        <div class="name">{{ props.title }}</div>
        <div class="time">{{ props.time }}</div>
      </div>
      <div class="row-2">
        <div class="preview">
          <span v-if="props.isTyping" style="color: var(--accent-2)">
            typing…
          </span>
          <span v-else>{{ props.preview }}</span>
        </div>
        <NxIcon
          v-if="props.isMuted"
          class="u-mute"
          name="fa-solid fa-bell-slash"
          style="font-size: 11px"
        />
        <NxBadge v-if="props.unread > 0">{{ props.unread }}</NxBadge>
      </div>
    </div>
  </div>
</template>
