<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import {
  NxAttachmentFile,
  NxAvatar,
  NxBadge,
  NxButton,
  NxChatHeader,
  NxChatRow,
  NxComposer,
  NxDaySeparator,
  NxEmpty,
  NxFolderTab,
  NxIcon,
  NxInput,
  NxMessageBubble,
  NxPill,
  NxReaction,
  NxSettingRow,
  NxSkeleton,
  NxThemeCard,
  NxThemeGrid,
  NxToggle,
} from "..";

type ThemeMode = "light" | "dark" | "system";

const themeMode = ref<ThemeMode>("dark");

function resolveTheme(mode: ThemeMode): "light" | "dark" {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return mode;
}

function applyTheme(mode: ThemeMode): void {
  document.documentElement.dataset.theme = resolveTheme(mode);
}

onMounted(() => {
  applyTheme(themeMode.value);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (themeMode.value === "system") {
        applyTheme("system");
      }
    });
});

watch(themeMode, (mode) => applyTheme(mode));

type AvatarColor = "c-1" | "c-2" | "c-3" | "c-4" | "c-5" | "c-6";

const avatarColors: AvatarColor[] = ["c-1", "c-2", "c-3", "c-4", "c-5", "c-6"];

const avatarSizes = ["sm", "md", "lg", "xl"] as const;

const sandboxSearchPlain = ref("");
const sandboxSearchIcon = ref("");
const sandboxToggle = ref(true);
const activeFolder = ref<"all" | "direct">("all");

const composerDraft = ref(
  "Press Enter (without Shift) to emit send — clears this field.",
);

function clearComposerDraft() {
  composerDraft.value = "";
}
</script>

<template>
  <div
    class="nx-scroll-root nx-showcase-root u-col u-gap-24"
    style="
      box-sizing: border-box;
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    "
  >
    <header class="u-col u-gap-10">
      <div class="u-h1">nexus-ui</div>
      <p class="u-dim" style="max-width: 62ch">
        Component sandbox (Vite dev). Imports the full barrel from
        <code
          style="font-size: 12px; color: var(--accent-2); font-family: var(--mono)"
          >src/index.ts</code
        >
        — all layered CSS ships with it.
      </p>
      <div class="u-col u-gap-8">
        <div class="u-h3">Theme (data-theme)</div>
        <NxThemeGrid>
          <NxThemeCard
            :is-active="themeMode === 'light'"
            @click="themeMode = 'light'"
          >
            Light
          </NxThemeCard>
          <NxThemeCard
            :is-active="themeMode === 'dark'"
            @click="themeMode = 'dark'"
          >
            Dark
          </NxThemeCard>
          <NxThemeCard
            :is-active="themeMode === 'system'"
            @click="themeMode = 'system'"
          >
            System
          </NxThemeCard>
        </NxThemeGrid>
      </div>
      <NxDaySeparator>Showcase overview</NxDaySeparator>
    </header>

    <!-- ─── Atoms: Buttons ─── -->
    <section class="card u-col u-gap-16">
      <h2 class="u-h2">Atoms · Buttons</h2>
      <p class="u-small">Variants, sizes, and icon-only compositions.</p>
      <div class="u-row u-gap-10" style="flex-wrap: wrap; align-items: center">
        <NxButton variant="default">Default</NxButton>
        <NxButton variant="primary">Primary</NxButton>
        <NxButton variant="ghost">Ghost</NxButton>
        <NxButton variant="danger">Danger</NxButton>
      </div>
      <div class="u-row u-gap-10" style="flex-wrap: wrap; align-items: center">
        <NxButton size="sm">Small</NxButton>
        <NxButton size="md">Medium</NxButton>
        <NxButton size="lg">Large</NxButton>
      </div>
      <div class="u-row u-gap-10" style="flex-wrap: wrap; align-items: center">
        <NxButton variant="primary" icon-only aria-label="Send">
          <NxIcon name="fa-solid fa-paper-plane" />
        </NxButton>
        <NxButton variant="ghost" icon-only size="sm" aria-label="Search">
          <NxIcon name="fa-solid fa-magnifying-glass" />
        </NxButton>
        <NxButton variant="danger" icon-only aria-label="Delete">
          <NxIcon name="fa-solid fa-trash" />
        </NxButton>
      </div>
    </section>

    <!-- ─── Atoms: Avatars ─── -->
    <section class="card u-col u-gap-16">
      <h2 class="u-h2">Atoms · Avatars</h2>
      <p class="u-small">
        Matrix of <span class="u-mute">size</span> ×
        <span class="u-mute">color</span>, plus online state.
      </p>
      <div class="u-col u-gap-16">
        <div
          v-for="size in avatarSizes"
          :key="size"
          class="u-col u-gap-8"
          style="overflow-x: auto"
        >
          <div class="u-tiny">{{ size }}</div>
          <div class="u-row u-gap-10" style="flex-wrap: wrap">
            <div
              v-for="c in avatarColors"
              :key="c"
              class="u-col u-gap-6"
              style="align-items: center; width: 72px"
            >
              <NxAvatar :size="size" :color="c">NX</NxAvatar>
              <span class="u-tiny">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="u-divider" />
      <div class="u-col u-gap-8">
        <div class="u-h3">Online indicator</div>
        <div class="u-row u-gap-14" style="flex-wrap: wrap; align-items: center">
          <NxAvatar color="c-2" size="xl" :is-online="true">NX</NxAvatar>
          <NxAvatar color="c-4" size="lg">NX</NxAvatar>
        </div>
      </div>
    </section>

    <!-- ─── Atoms: Badges · Pills ─── -->
    <section class="card u-row u-gap-24" style="flex-wrap: wrap; align-items: flex-start">
      <div class="u-col u-gap-12" style="flex: 1; min-width: 220px">
        <h2 class="u-h2">Atoms · Badges</h2>
        <div class="u-row u-gap-12" style="flex-wrap: wrap; align-items: center">
          <NxBadge variant="default">3</NxBadge>
          <NxBadge variant="muted">12</NxBadge>
        </div>
      </div>
      <div class="u-col u-gap-12" style="flex: 1; min-width: 220px">
        <h2 class="u-h2">Atoms · Pills</h2>
        <div class="u-row u-gap-10" style="flex-wrap: wrap">
          <NxPill variant="default">Default</NxPill>
          <NxPill variant="accent">Accent</NxPill>
          <NxPill variant="ok">OK</NxPill>
          <NxPill variant="warn">Warn</NxPill>
          <NxPill variant="err">Error</NxPill>
        </div>
      </div>
    </section>

    <!-- ─── Atoms: Inputs · Day separator · Reactions ─── -->
    <section class="card u-col u-gap-16">
      <h2 class="u-h2">Atoms · Inputs</h2>
      <div class="u-col u-gap-14" style="max-width: 420px">
        <NxInput
          v-model="sandboxSearchPlain"
          placeholder="Plain input (controlled)"
        />
        <NxInput
          v-model="sandboxSearchIcon"
          icon="fa-solid fa-magnifying-glass"
          placeholder="With leading icon · search…"
        />
      </div>
      <div class="u-divider" />
      <h3 class="u-h3">Day separator · Reactions</h3>
      <NxDaySeparator>Today · sandbox</NxDaySeparator>
      <div class="u-row u-gap-8" style="flex-wrap: wrap">
        <NxReaction emoji="🎉" :count="3" />
        <NxReaction emoji="❤️" :count="2" />
        <NxReaction emoji="🎉" :count="12" :is-mine="true" />
      </div>
    </section>

    <!-- ─── Molecules ─── -->
    <section class="card u-col u-gap-18">
      <h2 class="u-h2">Molecules</h2>

      <div class="u-col u-gap-8">
        <h3 class="u-h3">Folder tabs</h3>
        <p class="u-small">
          Wrapped in
          <code style="font-size: 12px; font-family: var(--mono)"
            >.folder-tabs</code
          >
          for scrollbar chrome from the stylesheet.
        </p>
        <div class="folder-tabs">
          <NxFolderTab
            name="All"
            icon="fa-solid fa-inbox"
            :count="21"
            :is-active="activeFolder === 'all'"
            @click="activeFolder = 'all'"
          />
          <NxFolderTab
            name="Direct"
            icon="fa-solid fa-user"
            :count="3"
            :is-active="activeFolder === 'direct'"
            @click="activeFolder = 'direct'"
          />
        </div>
      </div>

      <div class="u-col u-gap-8">
        <h3 class="u-h3">Chat rows</h3>
        <div
          style="
            padding: 6px 8px;
            border-radius: var(--radius);
            border: 1px solid var(--line);
          "
          class="u-col"
        >
          <NxChatRow
            title="Design System"
            time="12:42"
            preview="Maya: pushed the new tokens"
            avatar="DS"
            color="c-1"
            :is-online="true"
            :unread="3"
            :is-pinned="true"
          />
          <NxChatRow
            title="Maya Chen"
            time="12:30"
            preview=""
            avatar="MC"
            color="c-2"
            :is-online="true"
            :is-active="false"
            :is-typing="true"
          />
          <NxChatRow
            title="Engineering"
            time="Yesterday"
            preview="New topic: realtime infra"
            avatar="EN"
            color="c-3"
            :is-online="false"
            :unread="0"
          />
          <NxChatRow
            title="Alerts (muted)"
            time="Mon"
            preview="Weekly digest attached"
            avatar="AL"
            color="c-5"
            :is-muted="true"
            :unread="1"
          />
        </div>
      </div>

      <div class="u-col u-gap-10">
        <h3 class="u-h3">Setting row · toggle</h3>
        <div style="max-width: 520px">
          <NxSettingRow
            title="Desktop notifications"
            description="Muted channels still respect mentions."
          >
            <NxToggle v-model="sandboxToggle" label="Desktop notifications" />
          </NxSettingRow>
        </div>
      </div>

      <div class="u-col u-gap-12">
        <h3 class="u-h3">Message bubbles</h3>
        <div
          class="u-col"
          style="
            gap: 14px;
            padding: 16px;
            border-radius: var(--radius);
            border: 1px solid var(--line);
            background: var(--bg);
          "
        >
          <NxMessageBubble
            author="Maya Chen"
            time="12:36"
            avatar="MC"
            color="c-2"
            :is-mine="false"
          >
            <template #reply>
              <div class="msg-reply">
                <div>
                  <div class="ra">Alex Morgan</div>
                  <div class="rt">
                    Adding the pinned bar and reactions in one pass…
                  </div>
                </div>
              </div>
            </template>
            Don&apos;t forget <span class="mention">attachments</span> in mock
            data.
            <template #attachments>
              <NxAttachmentFile name="composer-spec.pdf" size="412 KB">
                <template #action>
                  <NxButton icon-only size="sm" variant="ghost" aria-label="Download">
                    <NxIcon name="fa-solid fa-download" />
                  </NxButton>
                </template>
              </NxAttachmentFile>
            </template>
            <template #reactions>
              <NxReaction emoji="🎉" :count="3" :is-mine="true" />
              <NxReaction emoji="💬" :count="7" />
            </template>
          </NxMessageBubble>

          <NxMessageBubble
            author="You"
            time="12:42"
            avatar="AM"
            color="c-1"
            :is-mine="true"
            status="sent"
          >
            Sandbox copy for <strong>sent</strong> receipts.
          </NxMessageBubble>
          <NxMessageBubble
            author="You"
            time="12:43"
            avatar="AM"
            color="c-1"
            :is-mine="true"
            status="read"
          >
            And a <strong>read</strong> double-check preview.
          </NxMessageBubble>
        </div>
      </div>
    </section>

    <!-- ─── Feedback · Skeleton · Empty ─── -->
    <section class="card u-col u-gap-16">
      <h2 class="u-h2">Layouts · Feedback</h2>

      <div class="u-col u-gap-8">
        <h3 class="u-h3">Empty state (<code>NxEmpty</code>)</h3>
        <NxEmpty
          icon="fa-solid fa-inbox"
          title="No drafts yet"
          description="Composable UI only — plug in Laravel routes or SPA links from the host app."
        >
          <template #actions>
            <div class="u-row u-gap-10">
              <NxButton variant="primary" size="sm">
                <NxIcon name="fa-solid fa-pen-to-square" />
                Compose
              </NxButton>
              <NxButton variant="ghost" size="sm">Dismiss</NxButton>
            </div>
          </template>
        </NxEmpty>
      </div>

      <div class="u-divider" />

      <div class="u-col u-gap-10">
        <h3 class="u-h3">Skeleton (<code>NxSkeleton</code>)</h3>
        <div class="u-row u-gap-12" style="align-items: center">
          <NxSkeleton style="width: 48px; height: 48px; border-radius: 50%" />
          <NxSkeleton style="flex: 1; height: 14px; min-width: 120px" />
        </div>
        <NxSkeleton style="width: 100%; height: 72px; display: block" />
      </div>
    </section>

    <!-- ─── Organisms preview ─── -->
    <section class="card u-col u-gap-0" style="padding: 0; overflow: hidden">
      <h2 class="u-h3" style="padding: 20px 20px 0">Organisms preview</h2>
      <p class="u-small u-dim" style="padding: 8px 20px 0">
        Header + composer as they&apos;d stack in <code>.main</code>.
      </p>
      <div style="margin-top: 14px">
        <NxChatHeader title="Sandbox channel" subtitle="Preview · Nexus UI kit">
          <template #leading>
            <NxAvatar color="c-3" size="lg">SB</NxAvatar>
          </template>
          <template #actions>
            <NxButton icon-only variant="ghost" aria-label="Search">
              <NxIcon name="fa-solid fa-magnifying-glass" />
            </NxButton>
            <NxButton icon-only variant="ghost" aria-label="Call">
              <NxIcon name="fa-solid fa-phone" />
            </NxButton>
            <NxButton icon-only variant="ghost" aria-label="Info">
              <NxIcon name="fa-solid fa-circle-info" />
            </NxButton>
          </template>
        </NxChatHeader>

        <NxComposer
          v-model="composerDraft"
          placeholder="Message #sandbox…"
          @send="clearComposerDraft"
        >
          <template #prepend>
            <NxButton icon-only size="sm" variant="ghost" aria-label="Attach">
              <NxIcon name="fa-solid fa-paperclip" />
            </NxButton>
          </template>
          <template #actions>
            <NxButton icon-only size="sm" variant="ghost" aria-label="Emoji">
              <NxIcon name="fa-regular fa-face-smile" />
            </NxButton>
            <NxButton icon-only size="sm" variant="ghost" aria-label="Mention">
              <NxIcon name="fa-solid fa-at" />
            </NxButton>
            <NxButton variant="primary" icon-only aria-label="Send">
              <NxIcon name="fa-solid fa-paper-plane" />
            </NxButton>
          </template>
        </NxComposer>
      </div>
    </section>

    <footer class="u-tiny u-mute u-col u-gap-4" style="padding-bottom: 48px">
      <span>nexus-ui showcase · run </span>
      <code style="font-size: 11px; font-family: var(--mono)">npm run dev</code>
      <span> · scroll is contained on this root layer so </span>
      <code style="font-size: 11px; font-family: var(--mono)"
        >body &#123; overflow: hidden &#125;</code
      >
      <span> from tokens remains intact.</span>
    </footer>
  </div>
</template>
