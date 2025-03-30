<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid'
import VIconButton from './VIconButton.vue'
import { onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    showHeader?: boolean | null
  }>(),
  {
    showHeader: true,
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
    <Transition mode="out-in">
      <div
        v-if="model"
        class="w-screen h-screen z-20 fixed top-0 left-0 bg-black/10 flex items-center justify-center"
        @mousedown.self="model = false"
      >
        <div
          class="modal transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] p-5 bg-white border w-full max-w-3xl border-neutral-300 rounded-3xl shadow-lg"
        >
          <div
            v-if="showHeader == null || showHeader == true"
            class="flex items-center justify-between mb-5"
          >
            <h2 class="font-medium select-none">{{ props.title }}</h2>
            <VIconButton label="Close modal" size="sm" @click="model = false">
              <XMarkIcon class="w-5 h-5" />
            </VIconButton>
          </div>
          <slot />
          <div class="flex items-center justify-end gap-3 mt-5">
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
  transition: opacity 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from .modal,
.v-leave-to .modal {
  opacity: 0;
  transform: scale(0.9);
}
</style>
