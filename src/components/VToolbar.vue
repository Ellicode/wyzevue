<script setup lang="ts">
const props = defineProps<{
  overlay?: boolean
}>()
const model = defineModel()
</script>

<template>
  <Transition>
    <div
      v-if="model !== false"
      class="p-2 w-fit border border-neutral-200 bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl flex items-center gap-2"
      :class="{
        'fixed bottom-10 left-1/2 -translate-x-1/2': props.overlay,
        'mx-auto': !props.overlay,
      }"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(5px);
}
</style>
