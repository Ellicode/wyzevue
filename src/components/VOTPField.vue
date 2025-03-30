<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  hint?: string
  label?: string
  length?: number
  autofocus?: boolean
}>()

const emit = defineEmits(['complete'])
const model = defineModel<string>()

const inputs = ref<HTMLInputElement[]>([])
const inputValues = ref<string[]>(Array(props.length || 6).fill(''))

const focusNext = (index: number) => {
  if (index < (props.length || 6) - 1) {
    inputs.value[index + 1]?.focus()
  } else {
    emit('complete', inputValues.value.join(''))
  }
}

const handleInput = (index: number, event: Event) => {
  const input = event.target as HTMLInputElement
  const value = input.value

  if (value.length >= 1) {
    inputValues.value[index] = value[value.length - 1]
    input.value = value[value.length - 1]
    focusNext(index)
  }

  model.value = inputValues.value.join('')
}

const handleKeydown = (index: number, event: KeyboardEvent) => {
  if (event.key === 'Backspace' && !inputValues.value[index]) {
    if (index > 0) {
      inputs.value[index - 1]?.focus()
    }
  }
}
</script>

<template>
  <div class="my-5 flex flex-col">
    <label v-if="props.label" class="text-sm mb-3 font-medium select-none text-neutral-700">
      {{ props.label }}
    </label>
    <div class="flex gap-2">
      <input
        v-for="(_, index) in Array(props.length || 6)"
        :key="index"
        :autofocus="index === 0 && props.autofocus"
        ref="inputs"
        type="text"
        inputmode="numeric"
        maxlength="1"
        v-model="inputValues[index]"
        @input="handleInput(index, $event)"
        @keydown="handleKeydown(index, $event)"
        class="w-10 h-10 text-center shadow-xs rounded-lg border border-neutral-200 focus:outline-0 focus:border-neutral-300 focus:ring-2 focus:ring-offset-2 ring-green-500 text-lg"
      />
    </div>
    <div v-if="props.hint" class="text-xs text-neutral-500 select-none mt-2">{{ props.hint }}</div>
  </div>
</template>
