<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{
  title: string
  headline?: string
  avatar?: string
  to?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
    path?: string
  }
}>()
</script>

<template>
  <div class="my-10 flex items-center gap-7 pb-5">
    <div
      v-if="props.avatar"
      class="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center"
    >
      <img :src="props.avatar" alt="avatar" class="w-8 h-8 select-none rounded-full" />
    </div>
    <slot name="avatar" />
    <div class="flex flex-col">
      <h2 class="text-sm tracking-wide uppercase text-neutral-500 mb-2">{{ props.headline }}</h2>
      <router-link
        :to="props.to"
        v-if="props.to"
        class="flex items-center gap-2 active:text-neutral-500 cursor-pointer select-none"
      >
        <h1 class="text-2xl font-medium">{{ props.title }}</h1>
        <ChevronRightIcon class="w-6 h-6 text-neutral-400" />
      </router-link>
      <h1 v-else class="text-2xl font-medium">{{ props.title }}</h1>
    </div>
    <div class="flex gap-3 ms-auto items-center">
      <slot />
    </div>
  </div>
</template>
