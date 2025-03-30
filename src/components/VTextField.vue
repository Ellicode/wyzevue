<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  hint?: string
  label?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  minLength?: number
  maxLength?: number
  required?: boolean
}>()
const model = defineModel<string>()
const error = computed(() => {
  if (!props.required && (model.value?.length ?? 0) === 0) return false
  if (props.minLength && (model.value?.length ?? 0) < props.minLength) {
    return true
  } else if (props.maxLength && (model.value?.length ?? 0) > props.maxLength) {
    return true
  } else if (props.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(model.value || '')) {
    return true
  } else if (
    props.type === 'url' &&
    !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(model.value || '')
  ) {
    return true
  } else if (props.required && (model.value?.length ?? 0) === 0) {
    return true
  }
  return false
})
</script>

<template>
  <div class="my-5 flex flex-col max-w-lg">
    <label class="text-sm mb-3 font-medium select-none text-neutral-700" for="input">
      {{ props.label }}
    </label>
    <input
      v-model="model"
      id="input"
      :type="props.type || 'text'"
      class="w-full border-neutral-200 focus:border-neutral-300 h-9 px-3 shadow-xs mb-2 rounded-lg border focus:outline-0 focus:ring-2 focus:ring-offset-2 text-sm"
      :class="{
        'text-red-700 ring-red-500': error,
        'ring-green-500': !error,
      }"
    />
    <div
      :class="{
        'text-red-700': error,
      }"
      class="text-xs text-neutral-500 select-none flex justify-between"
    >
      <span>{{ props.hint }}</span>
      <span v-if="props.minLength || props.maxLength">
        {{ model?.length || 0 }} / {{ props.minLength ? `${props.minLength}` : ''
        }}{{ props.minLength && props.maxLength ? '-' : '' }}{{ props.maxLength }}
      </span>
    </div>
  </div>
</template>
