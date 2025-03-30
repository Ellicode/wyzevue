<script setup lang="ts">
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/16/solid'
import VDropdown from './VDropdown.vue'
import VDropdownItem from './VDropdownItem.vue'
import VDropdownSeparator from './VDropdownSeparator.vue'
import { computed, ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  hint?: string
  label?: string
  filter?: boolean
  showFooter?: boolean
  items: { title: string; value: string }[]
  multiple?: boolean
}>()

// Change model type to array when multiple is true
const model = defineModel<{ title: string; value: string }[] | { title: string; value: string }>()

const search = ref('')
const filteredItems = computed(() => {
  return props.items.filter((item) => item.title.toLowerCase().includes(search.value.toLowerCase()))
})

const selectItem = (item: { title: string; value: string }) => {
  if (props.multiple) {
    const modelValue = model.value as { title: string; value: string }[]
    const index = modelValue?.findIndex((i) => i.value === item.value) ?? -1

    if (index === -1) {
      model.value = [...(modelValue || []), item]
    } else {
      model.value = modelValue.filter((i) => i.value !== item.value)
    }
  } else {
    model.value = item
  }
}

const isSelected = (item: { title: string; value: string }) => {
  if (props.multiple) {
    return (model.value as { title: string; value: string }[])?.some((i) => i.value === item.value)
  }
  return (model.value as { title: string; value: string })?.value === item.value
}

const displayText = computed(() => {
  if (props.multiple) {
    const selectedItems = model.value as { title: string; value: string }[]
    return selectedItems?.length ? selectedItems.map((item) => item.title).join(', ') : 'Select...'
  }
  return (model.value as { title: string; value: string })?.title || 'Select...'
})
</script>

<template>
  <div class="my-5 flex flex-col max-w-lg">
    <label class="text-sm mb-3 font-medium select-none text-neutral-700" for="input">
      {{ props.label }}
    </label>
    <VDropdown>
      <template #activator="{ toggle }">
        <button
          id="input"
          @click="toggle"
          class="w-full flex select-none cursor-pointer justify-between items-center h-9 px-3 shadow-xs mb-2 autofill:!bg-green-100 rounded-lg border border-neutral-200 focus:outline-0 focus:border-neutral-300 focus:ring-2 focus:ring-offset-2 ring-green-500 text-sm"
        >
          {{ displayText }}
          <ChevronDownIcon class="w-4 h-4 text-neutral-500" />
        </button>
      </template>
      <div
        v-if="props.filter"
        class="rounded-md bg-neutral-100 mb-1 outline-0 flex items-center has-[:focus]:ring-2 ring-green-500 border-neutral-200 border text-neutral-700 text-sm"
      >
        <MagnifyingGlassIcon class="shrink-0 w-5 h-5 text-neutral-500 ms-1 me-2" />
        <input
          type="text"
          placeholder="Search..."
          v-model="search"
          class="flex-1 h-full py-1.5 outline-0 placeholder:text-neutral-500"
        />
      </div>
      <VDropdownItem
        v-for="item in filteredItems"
        :key="item.value"
        :title="item.title"
        :preventClose="props.multiple"
        @click="selectItem(item)"
      >
        <template #prepend-icon>
          <template v-if="props.multiple">
            <div
              class="w-4 h-4 rounded flex items-center justify-center border shrink-0"
              :class="{
                'bg-green-500 border-green-600': isSelected(item),
                'bg-white border-neutral-300': !isSelected(item),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-2.5 w-2.5 text-white"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  class="transition-[stroke-dashoffset] ease-out duration-200"
                  :style="{
                    strokeDasharray: '32',
                    strokeDashoffset: isSelected(item) ? '0' : '32',
                    fill: 'none',
                    strokeWidth: '3',
                  }"
                  clip-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M 2 10.75 l 5.5 5.5 l 10.5 -11.25"
                ></path>
              </svg>
            </div>
          </template>
          <template v-else>
            <CheckIcon v-if="isSelected(item)" class="w-4 h-4 shrink-0 text-green-500" />
            <div v-else class="w-4 shrink-0"></div>
          </template>
        </template>
      </VDropdownItem>
      <div v-if="!filteredItems.length" class="flex flex-col items-center justify-center h-32">
        <MagnifyingGlassIcon class="w-8 h-8 mb-3 text-neutral-500" />
        <div class="text-neutral-500 text-sm select-none">No items found</div>
      </div>
      <VDropdownSeparator v-if="props.showFooter" />
      <span v-if="props.showFooter" class="px-2 py-1.5 text-neutral-500 select-none text-xs">
        Use &uarr; &darr; to choose items, <br />
        &crarr; to select, and ⎋ to cancel
      </span>
    </VDropdown>
    <div class="text-xs text-neutral-500 select-none">{{ props.hint }}</div>
  </div>
</template>
