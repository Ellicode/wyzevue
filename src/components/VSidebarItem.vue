<script setup lang="ts">
const props = defineProps<{
  title: string
  isChildren?: boolean
  to?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
    path?: string
  }
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <router-link
    class="rounded-xl flex group select-none items-center cursor-pointer w-full gap-5 h-9 px-3"
    active-class="bg-neutral-200 active"
    inactive-class="hover:bg-neutral-200"
    :to="props.to"
    v-if="props.to"
  >
    <div v-if="isChildren"></div>
    <slot name="prepend-icon" />
    <span class="font-medium text-sm">{{ props.title }}</span>
    <div class="flex-1">
      <slot name="append-icon" />
    </div>
    <div class="w-1 h-1 rounded-full shrink-0 bg-black group-[.active]:block hidden"></div>
  </router-link>
  <div
    class="rounded-xl flex select-none items-center cursor-pointer w-full gap-5 h-9 px-3"
    v-else
    @click="emit('click')"
  >
    <div v-if="isChildren"></div>
    <slot name="prepend-icon" />
    <span class="font-medium text-sm">{{ props.title }}</span>
    <div class="flex-1">
      <slot name="append-icon" />
    </div>
  </div>
</template>
