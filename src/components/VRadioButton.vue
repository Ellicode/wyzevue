<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  subtitle?: string
  value?: string
}>()

const model = defineModel()
const id = ref(Math.random().toString(36).substring(7))
</script>

<template>
  <div class="flex items-center gap-3 my-3">
    <input v-model="model" type="radio" :id="id" class="hidden" />
    <button
      @click="model = props.value"
      class="w-5 h-5 mr-2 cursor-pointer border rounded-full flex outline-0 focus:ring-2 ring-offset-2 ring-green-500 items-center justify-center"
      :class="
        model == props.value ? 'bg-green-500 border-green-600' : 'bg-white border-neutral-300'
      "
    >
      <div
        class="w-2 h-2 bg-white transition rounded-full duration-200 ease-out"
        :class="model == props.value ? 'scale-100' : 'scale-0'"
      ></div>
    </button>
    <div @click="model = props.value" class="flex flex-col">
      <label class="text-sm text-neutral-700 select-none" for="checkbox">
        {{ props.title }}
      </label>
      <div class="text-xs text-neutral-500 select-none">{{ props.subtitle }}</div>
    </div>
  </div>
</template>
