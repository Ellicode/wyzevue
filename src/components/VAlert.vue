<script setup lang="ts">
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps<{
  color?: 'green' | 'red' | 'yellow' | 'purple'
  title?: string
  description?: string
}>()
</script>
<template>
  <div
    class="p-4 border my-5 rounded-xl flex flex-col gap-5 items-end"
    :class="{
      'border-green-200 bg-green-100 text-green-700': props.color === 'green',
      'border-red-200 bg-red-100 text-red-700': props.color === 'red',
      'border-yellow-200 bg-yellow-100 text-yellow-700': props.color === 'yellow',
      'border-purple-200 bg-purple-100 text-purple-700': props.color === 'purple',
      'border-neutral-200 bg-neutral-100 text-neutral-700': !props.color,
    }"
  >
    <div class="gap-5 flex items-center w-full">
      <CheckCircleIcon v-if="color == 'green'" class="w-7 h-7 shrink-0 mb-auto" />
      <ShieldExclamationIcon v-if="color == 'red'" class="w-7 h-7 shrink-0 mb-auto" />
      <ExclamationTriangleIcon v-if="color == 'yellow'" class="w-7 h-7 shrink-0 mb-auto" />
      <SparklesIcon v-if="color == 'purple'" class="w-7 h-7 shrink-0 mb-auto" />
      <InformationCircleIcon v-if="!color" class="w-7 h-7 shrink-0 mb-auto" />
      <div class="flex flex-col gap-2 flex-1">
        <h3 class="font-medium">{{ props.title }}</h3>
        <p class="text-sm" v-if="props.description">{{ props.description }}</p>
      </div>
    </div>
    <slot name="actions" />
  </div>
</template>
