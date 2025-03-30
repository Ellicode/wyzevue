<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid'
import VIconButton from './VIconButton.vue'
import { onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    showHeader?: boolean
    background?: boolean
    side?: 'left' | 'right'
  }>(),
  {
    showHeader: true,
    background: true,
    side: 'left',
  },
)
const model = defineModel()
const toggle = () => {
  model.value = !model.value
}
const close = () => {
  model.value = false
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      model.value = false
    }
  })
})
</script>
<template>
  <div>
    <slot name="activator" :toggle="toggle" />
    <Transition :class="side" mode="out-in">
      <div
        v-if="model"
        class="w-screen h-screen z-20 fixed top-0 left-0 flex items-center"
        :class="{
          'bg-black/10': props.background,
          'pointer-events-none': !props.background,
          'justify-end': props.side === 'right',
          'justify-start': props.side === 'left',
        }"
        @mousedown.self="model = false"
      >
        <div
          class="modal transition-all flex flex-col pointer-events-auto h-full w-3/12 duration-300 p-5 bg-white border-e max-w-3xl border-neutral-300 shadow-lg"
        >
          <div v-if="showHeader" class="flex items-center justify-between mb-5">
            <h2 class="font-medium select-none">{{ props.title }}</h2>
            <VIconButton label="Close modal" size="sm" @click="model = false">
              <XMarkIcon class="w-5 h-5" />
            </VIconButton>
          </div>
          <div>
            <slot />
          </div>
          <div class="flex items-center justify-end gap-3 mt-auto">
            <slot name="footer" :close="close" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from.left .modal,
.v-leave-to.left .modal {
  opacity: 0;
  transform: translateX(-20%);
}
.v-enter-from.right .modal,
.v-leave-to.right .modal {
  opacity: 0;
  transform: translateX(20%);
}
</style>
