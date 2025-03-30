<script setup lang="ts">
import VTooltip from './VTooltip.vue'

const props = defineProps<{
  color?: 'green' | 'red' | 'yellow' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  label?: string
}>()
</script>
<template>
  <VTooltip :content="props.label || ''">
    <button
      :aria-label="props.label"
      type="button"
      class="rounded-lg gap-3 focus:outline-0 inset-shadow-2xs inset-shadow-white/20 flex items-center justify-center transition-colors duration-100 cursor-pointer font-medium focus-visible:ring-2 focus-visible:ring-offset-1 select-none"
      :class="{
        'ring-green-600 text-green-500  hover:bg-green-500/10 active:bg-green-500/15':
          props.color === 'green',
        'ring-red-600 text-red-500  hover:bg-red-500/10 active:bg-red-500/15':
          props.color === 'red',
        'ring-yellow-600 text-yellow-500  hover:bg-yellow-500/10 active:bg-yellow-500/15':
          props.color === 'yellow',
        'ring-purple-600 text-purple-500  hover:bg-purple-500/10 active:bg-purple-500/15':
          props.color === 'purple',
        'ring-neutral-600 text-neutral-500 hover:bg-neutral-500/10 active:bg-neutral-500/15':
          !props.color,
        'w-8 h-8': props.size === 'sm',
        'w-12 h-12': props.size === 'lg',
        'w-10 h-10': !props.size,
      }"
    >
      <slot />
    </button>
  </VTooltip>
</template>
