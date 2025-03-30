<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  subtitle?: string
}>()

const model = defineModel()
const id = ref(Math.random().toString(36).substring(7))
</script>

<template>
  <div class="flex items-center gap-3 my-3">
    <button
      @click="model = !model"
      class="w-5 h-5 mr-2 cursor-pointer border rounded-md focus:ring-2 ring-offset-2 outline-0 ring-green-500 flex items-center justify-center"
      :class="model ? 'bg-green-500 border-green-600' : 'bg-white border-neutral-300'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3.5 w-3.5 text-white"
        viewBox="0 0 20 20"
        stroke="currentColor"
      >
        <path
          class="transition-[stroke-dashoffset] ease-out duration-200"
          :style="{
            strokeDasharray: '32',
            strokeDashoffset: model ? '0' : '32',
            fill: 'none',
            strokeWidth: '3',
          }"
          clip-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M 2 10.75 l 5.5 5.5 l 10.5 -11.25"
        ></path>
      </svg>
    </button>
    <input v-model="model" type="checkbox" :id="id" class="hidden" />
    <div @click="model = !model" class="flex flex-col">
      <label class="text-sm text-neutral-700 select-none" for="checkbox">
        {{ props.title }}
      </label>
      <div class="text-xs text-neutral-500 select-none">{{ props.subtitle }}</div>
    </div>
  </div>
</template>
