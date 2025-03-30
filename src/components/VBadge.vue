<script setup lang="ts">
const props = defineProps<{
  color?: 'green' | 'red' | 'yellow' | 'purple'
  type?: 'filled' | 'text' | 'outlined'
  size?: 'sm' | 'md'
}>()
</script>
<template>
  <span
    v-if="!props.type || props.type === 'filled'"
    class="gap-3 focus:outline-0 inset-shadow-2xs inset-shadow-white/20 border inline-flex items-center justify-center font-medium select-none"
    :class="{
      'bg-green-500  text-white': props.color === 'green',
      'bg-red-500  text-white': props.color === 'red',
      'bg-yellow-500 text-white': props.color === 'yellow',
      'bg-purple-500  text-white': props.color === 'purple',
      'bg-neutral-500  text-white': !props.color,
      'text-xs px-1 py-0.5 rounded-md': props.size === 'sm',
      'text-sm px-2 py-1 rounded-lg': !props.size || props.size === 'md',
    }"
  >
    <slot name="prepend-icon" />
    <slot />
    <slot name="append-icon" />
  </span>
  <span
    v-if="props.type === 'text'"
    class="gap-3 focus:outline-0 inset-shadow-2xs inset-shadow-white/20 inline-flex items-center justify-center font-medium select-none"
    :class="{
      'text-green-500  bg-green-500/15': props.color === 'green',
      'text-red-500  bg-red-500/15': props.color === 'red',
      'text-yellow-500  bg-yellow-500/15 ': props.color === 'yellow',
      'text-purple-500  bg-purple-500/15 ': props.color === 'purple',
      'text-neutral-500 bg-neutral-500/15 ': !props.color,
      'text-xs px-1 py-0.5 rounded-md': props.size === 'sm',
      'text-sm px-2 py-1 rounded-lg': !props.size || props.size === 'md',
    }"
  >
    <slot name="prepend-icon" />
    <slot />
    <slot name="append-icon" />
  </span>
  <span
    v-if="props.type === 'outlined'"
    class="gap-3 focus:outline-0 inset-shadow-2xs inset-shadow-white/20 border inline-flex items-center justify-center font-medium select-none"
    :class="{
      'border-green-500 text-green-500': props.color === 'green',
      'border-red-500 text-red-500': props.color === 'red',
      'border-yellow-500 text-yellow-500': props.color === 'yellow',
      'border-purple-500 text-purple-500': props.color === 'purple',
      'border-neutral-300 text-neutral-800': !props.color,
      'text-xs px-1 py-0.5 rounded-md': props.size === 'sm',
      'text-sm px-2 py-1 rounded-lg': !props.size || props.size === 'md',
    }"
  >
    <slot name="prepend-icon" />
    <slot />
    <slot name="append-icon" />
  </span>
</template>
