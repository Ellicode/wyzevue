<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, inject, provide } from 'vue'

const props = defineProps<{
  position?: 'left' | 'right' | 'top-left' | 'top-right'
}>()

const isParentDropdown = inject('isDropdown', false)
const isSubmenu = isParentDropdown
provide('isDropdown', true)

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const currentFocusIndex = ref(-1)

const toggle = (event?: Event) => {
  if (event) event.stopPropagation()
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    currentFocusIndex.value = -1
  }
}

const close = () => {
  isOpen.value = false
  currentFocusIndex.value = -1
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    close()
  }
}

const handleItemClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (
    !target.closest('[data-dropdown-activator]') &&
    target.closest('[role="menuitem"]') &&
    !target.closest('[data-prevent-close="true"]')
  ) {
    close()
  }
}

const handleKeyboard = (event: KeyboardEvent) => {
  if (!isOpen.value) return

  if (event.key === 'Escape') {
    close()
    return
  }

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    const items = dropdownRef.value?.querySelectorAll('[role="menuitem"]') || []
    const itemCount = items.length

    if (itemCount === 0) return

    if (event.key === 'ArrowDown') {
      currentFocusIndex.value = (currentFocusIndex.value + 1) % itemCount
    } else {
      currentFocusIndex.value = (currentFocusIndex.value - 1 + itemCount) % itemCount
    }

    ;(items[currentFocusIndex.value] as HTMLElement)?.focus()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleKeyboard)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('keydown', handleKeyboard)
})
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <div data-dropdown-activator>
      <slot name="activator" :toggle="toggle" />
    </div>
    <Transition
      mode="out-in"
      :class="{
        'origin-left': isSubmenu,
        'origin-top-left': props.position === 'left' || !props.position,
        'origin-top-right': props.position === 'right',
        'origin-bottom-left': props.position === 'top-left',
        'origin-bottom-right': props.position === 'top-right',
      }"
    >
      <div
        v-if="isOpen"
        @click="handleItemClick"
        :class="[
          'flex flex-col gap-1 z-10 w-56 p-1 bg-white border border-neutral-200 rounded-xl shadow-lg',
          isSubmenu
            ? `absolute left-[calc(100%+8px)] top-0 -mt-1`
            : props.position?.startsWith('top-')
              ? `absolute ${props.position === 'top-right' ? 'right-0' : 'left-0'} bottom-full mb-1`
              : `absolute ${props.position === 'right' ? 'right-0' : 'left-0'} mt-1`,
        ]"
      >
        <slot />
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
