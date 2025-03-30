<script setup lang="ts">
import VSpinner from './VSpinner.vue'

const props = defineProps<{
  color?: 'green' | 'red' | 'yellow' | 'purple'
  type?: 'filled' | 'bordered' | 'text'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}>()
const emit = defineEmits(['click'])
</script>
<template>
  <button
    v-if="!props.type || props.type === 'bordered'"
    type="button"
    @click="emit('click')"
    :disabled="props.disabled || props.loading"
    class="inset-shadow-2xs focus:outline-0 relative inset-shadow-white/20 bg-neutral-100 transition-colors duration-100 border border-neutral-200 font-medium focus-visible:ring-2 ring-offset-1 select-none"
    :class="{
      'ring-green-600 text-green-700': props.color === 'green',
      'ring-red-600 text-red-700': props.color === 'red',
      'ring-yellow-600 text-yellow-700': props.color === 'yellow',
      'ring-purple-600 text-purple-700': props.color === 'purple',
      'ring-neutral-600 text-neutral-700': !props.color,
      'text-xs px-2 py-1 rounded-md': props.size === 'sm',
      'text-sm px-2 py-1.5 rounded-lg': !props.size || props.size === 'md',
      'text-lg  px-4 py-2 rounded-xl': props.size === 'lg',
      'opacity-50 grayscale-100 pointer-events-none': props.disabled || props.loading,
      'active:bg-neutral-200 active:border-neutral-300 cursor-pointer':
        !props.disabled && !props.loading,
      'cursor-progress': props.loading,
    }"
  >
    <VSpinner
      v-if="props.loading"
      class="absolute w-4 h-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <div
      class="flex items-center justify-center gap-3"
      :class="{
        'opacity-0': props.loading,
      }"
    >
      <slot name="prepend-icon" />
      <slot />
      <slot name="append-icon" />
    </div>
  </button>
  <button
    v-if="props.type === 'filled'"
    type="button"
    @click="emit('click')"
    :disabled="props.disabled || props.loading"
    class="focus:outline-0 inset-shadow-2xs shadow-xs border inset-shadow-white/20 transition-colors duration-100 font-medium focus-visible:ring-2 focus-visible:ring-offset-1 select-none"
    :class="{
      'ring-green-600 border-green-600 bg-green-500 active:bg-green-600 text-white':
        props.color === 'green',
      'ring-red-600 border-red-600 bg-red-500 active:bg-red-600 text-white': props.color === 'red',
      'ring-yellow-600 border-yellow-600 bg-yellow-500 active:bg-yellow-600 text-white':
        props.color === 'yellow',
      'ring-purple-600 border-purple-600 bg-purple-500 active:bg-purple-600 text-white':
        props.color === 'purple',
      'ring-neutral-600 border-neutral-800 bg-neutral-900 active:bg-neutral-950 text-white':
        !props.color,
      'text-xs px-2 py-1 rounded-md': props.size === 'sm',
      'text-sm px-2 py-1.5 rounded-lg': !props.size || props.size === 'md',
      'text-lg  px-4 py-2 rounded-xl': props.size === 'lg',
      'opacity-50 grayscale-100 pointer-events-none': props.disabled || props.loading,
      'cursor-pointer': !props.disabled && !props.loading,
      'cursor-progress': props.loading,
    }"
  >
    <VSpinner
      v-if="props.loading"
      class="absolute w-4 h-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <div
      class="flex items-center justify-center gap-3"
      :class="{
        'opacity-0': props.loading,
      }"
    >
      <slot name="prepend-icon" />
      <slot />
      <slot name="append-icon" />
    </div>
  </button>
  <button
    v-if="props.type === 'text'"
    type="button"
    @click="emit('click')"
    :disabled="props.disabled || props.loading"
    class="bg-white focus:outline-0 inset-shadow-2xs inset-shadow-white/20 transition-colors duration-100 font-medium focus-visible:ring-2 ring-offset-1 select-none"
    :class="{
      'ring-green-600 text-green-500  hover:bg-green-500/10 active:bg-green-500/15':
        props.color === 'green',
      'ring-red-600 text-red-500  hover:bg-red-500/10 active:bg-red-500/15': props.color === 'red',
      'ring-yellow-600 text-yellow-500  hover:bg-yellow-500/10 active:bg-yellow-500/15':
        props.color === 'yellow',
      'ring-purple-600 text-purple-500  hover:bg-purple-500/10 active:bg-purple-500/15':
        props.color === 'purple',
      'ring-neutral-600 text-neutral-500 hover:bg-neutral-500/10 active:bg-neutral-500/15':
        !props.color,
      'text-xs px-2 py-1 rounded-md': props.size === 'sm',
      'text-sm px-2 py-1.5 rounded-lg': !props.size || props.size === 'md',
      'text-lg  px-4 py-2 rounded-xl': props.size === 'lg',
      'opacity-50 grayscale-100 pointer-events-none': props.disabled || props.loading,
      'cursor-pointer': !props.disabled && !props.loading,
      'cursor-progress': props.loading,
    }"
  >
    <VSpinner
      v-if="props.loading"
      class="absolute w-4 h-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <div
      class="flex items-center justify-center gap-3"
      :class="{
        'opacity-0': props.loading,
      }"
    >
      <slot name="prepend-icon" />
      <slot />
      <slot name="append-icon" />
    </div>
  </button>
</template>
