<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    progress: number
    steps?: number
  }>(),
  {
    progress: 0,
    steps: 0,
  },
)
</script>

<template>
  <div
    v-if="!steps"
    class="w-full h-3 max-w-lg my-3 bg-neutral-200 overflow-hidden transition duration-300 rounded"
  >
    <div
      class="bg-green-500 inset-shadow-2xs inset-shadow-white/20 h-full transition-all duration-300"
      :style="{
        width: `${props.progress}%`,
      }"
    ></div>
  </div>
  <div class="flex items-center max-w-lg gap-2 my-3">
    <div
      v-for="index in props.steps"
      :key="index"
      class="flex-1 h-3 inset-shadow-2xs inset-shadow-white/20 shadow-xs border rounded transition-colors duration-200"
      :class="{
        'bg-red-500 border-red-600':
          index <= Math.round((props.progress * props.steps) / 100) && props.progress <= 33,
        'bg-yellow-500 border-yellow-600':
          index <= Math.round((props.progress * props.steps) / 100) &&
          props.progress > 33 &&
          props.progress <= 66,
        'bg-green-500 border-green-600':
          index <= Math.round((props.progress * props.steps) / 100) && props.progress > 66,
        'bg-neutral-200 border-neutral-300':
          index > Math.round((props.progress * props.steps) / 100),
      }"
    ></div>
  </div>
</template>
