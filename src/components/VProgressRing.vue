<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  progress: number
  radius?: number
  stroke?: number
  color?: string
}>()

const normalizedRadius = computed(() => (props.radius || 16) - (props.stroke || 3) * 2)
const circumference = computed(() => normalizedRadius.value * 2 * Math.PI)

const strokeDashoffset = computed(() => {
  return circumference.value - (props.progress / 100) * circumference.value
})
</script>

<template>
  <svg :height="(props.radius || 16) * 2" :width="(props.radius || 16) * 2">
    <circle
      :stroke="props.color || '#404040'"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset: strokeDashoffset }"
      :stroke-width="props.stroke || 3"
      stroke-linecap="round"
      class="transition-all duration-500"
      fill="transparent"
      :r="normalizedRadius"
      :cx="props.radius || 16"
      :cy="props.radius || 16"
    />
  </svg>
</template>
