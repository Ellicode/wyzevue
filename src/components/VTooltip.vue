<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    content: string
    position?: 'top' | 'bottom'
    timeout?: number
  }>(),
  {
    content: '',
    position: 'top',
    timeout: 200,
  },
)

const isVisible = ref(false)
const triggerRef = ref(null)

const show = () => {
  if (props.content === '') return
  setTimeout(() => {
    isVisible.value = true
  }, props.timeout)
}

const hide = () => {
  isVisible.value = false
}
</script>

<template>
  <div class="relative inline-block">
    <!-- Trigger element -->
    <div
      ref="triggerRef"
      @mouseenter="show"
      @mouseleave="hide"
      @focus="show"
      @blur="hide"
      aria-describedby="tooltip"
    >
      <slot></slot>
    </div>

    <!-- Tooltip content -->
    <Transition mode="out-in" :class="props.position === 'bottom' ? 'origin-top' : 'origin-bottom'">
      <div
        v-if="isVisible"
        id="tooltip"
        role="tooltip"
        class="absolute w-max z-50 px-2 py-1 text-sm left-1/2 -translate-x-1/2 text-white bg-neutral-900 rounded-md shadow-sm select-none"
        :class="[props.position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2']"
      >
        {{ props.content }}
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.15s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
