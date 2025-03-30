<script setup lang="ts">
const props = defineProps<{
  color?: 'green' | 'red' | 'yellow' | 'purple'
  title?: string
  subtitle?: string
  preventClose?: boolean
}>()
const emit = defineEmits(['click'])
</script>
<template>
  <button
    type="button"
    @click="emit('click')"
    role="menuitem"
    tabindex="0"
    :data-prevent-close="props.preventClose"
    :aria-label="props.title"
    class="w-full gap-3 focus-visible:ring-2 ring-green-500 rounded-md px-2 transition-colors duration-75 focus:outline-0 flex items-center cursor-pointer text-sm select-none"
    :class="{
      'hover:bg-green-700 text-green-700 hover:text-white': props.color === 'green',
      'hover:bg-red-700 text-red-700 hover:text-white': props.color === 'red',
      'hover:bg-yellow-700 text-yellow-700 hover:text-white': props.color === 'yellow',
      'hover:bg-purple-700 text-purple-700 hover:text-white': props.color === 'purple',
      'hover:bg-neutral-100 active:bg-neutral-200': !props.color,
      'h-8': !props.subtitle,
      'h-12': props.subtitle,
    }"
  >
    <div class="shrink-0">
      <slot name="prepend-icon" />
    </div>
    <div class="flex flex-col items-start w-full text-left overflow-hidden">
      <span class="text-sm">{{ props.title }}</span>
      <span class="text-neutral-500 text-xs truncate max-w-full">{{ props.subtitle }}</span>
    </div>
    <div class="flex-1"></div>
    <div class="shrink-0">
      <slot name="append-icon" />
    </div>
  </button>
</template>
