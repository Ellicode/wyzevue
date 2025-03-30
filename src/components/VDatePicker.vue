<script setup lang="ts">
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/16/solid'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  hint?: string
  label?: string
}>()
const model = defineModel<Date>()
const showCalendar = ref(false)
const currentDate = ref(new Date())
const selectedDate = ref(model.value ? new Date(model.value) : new Date())

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// Add direction ref to track animation direction
const slideDirection = ref<'left' | 'right'>('right')

const currentMonth = computed(() => months[currentDate.value.getMonth()])
const currentYear = computed(() => currentDate.value.getFullYear())
const calendar = ref<HTMLElement | null>(null)
const input = ref<HTMLElement | null>(null)
const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  return new Date(year, month + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  return new Date(year, month, 1).getDay()
})

const days = computed(() => {
  const totalDays = daysInMonth.value
  const firstDay = firstDayOfMonth.value
  const days = []

  // Add empty spaces for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // Add the days of the month
  for (let i = 1; i <= totalDays; i++) {
    days.push(i)
  }

  return days
})

const formattedDateTime = computed(() => {
  if (!selectedDate.value) return ''

  const date = selectedDate.value

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

function previousMonth() {
  slideDirection.value = 'right'
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1)
}

function nextMonth() {
  slideDirection.value = 'left'
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1)
}

interface DateSelectionParams {
  day: number | null
}

function selectDay({ day }: DateSelectionParams): void {
  if (!day) return

  selectedDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), day)

  model.value = selectedDate.value
}

watch(model, (newValue) => {
  if (newValue) {
    const date = new Date(newValue)
    if (!isNaN(date.getTime())) {
      selectedDate.value = date
      currentDate.value = new Date(date.getFullYear(), date.getMonth())
    }
  }
})

// Close calendar when clicking outside
function handleClickOutside(event: MouseEvent) {
  if (
    calendar.value &&
    input.value &&
    !calendar.value.contains(event.target as HTMLElement) &&
    !input.value.contains(event.target as HTMLElement)
  ) {
    showCalendar.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      showCalendar.value = false
    }
  })
})
</script>

<template>
  <div class="my-5 flex flex-col max-w-lg relative">
    <label class="text-sm mb-3 font-medium select-none text-neutral-700" for="datepicker">
      {{ props.label }}
    </label>
    <div
      @click="showCalendar = !showCalendar"
      class="w-full flex items-center h-9 shadow-xs mb-2 autofill:!bg-green-100 rounded-lg border border-neutral-200 has-[:focus]:border-neutral-300 has-[:focus]:ring-2 has-[:focus]:ring-offset-2 ring-green-500 text-sm"
    >
      <input
        v-model="formattedDateTime"
        class="px-3 flex-1 h-full outline-0"
        id="datepicker"
        readonly
        ref="input"
      />
      <CalendarIcon class="w-4 h-4 text-neutral-500 mr-2" />
    </div>
    <div class="text-xs text-neutral-500 select-none">{{ props.hint }}</div>

    <Transition>
      <div
        v-if="showCalendar"
        ref="calendar"
        class="absolute top-full bg-white rounded-xl shadow-lg border border-neutral-200 p-4 z-50"
      >
        <div class="flex justify-between items-center mb-6">
          <button
            @click="previousMonth"
            class="p-1 hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer rounded"
          >
            <ChevronLeftIcon class="w-4 h-4" />
          </button>
          <span class="font-medium select-none">{{ currentMonth }} {{ currentYear }}</span>
          <button
            @click="nextMonth"
            class="p-1 hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer rounded"
          >
            <ChevronRightIcon class="w-4 h-4" />
          </button>
        </div>
        <Transition :name="slideDirection === 'left' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="`${currentYear}-${currentDate.getMonth()}`" class="calendar-grid">
            <div class="grid grid-cols-7 gap-1">
              <div
                v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
                class="text-center mb-3 text-sm text-neutral-400 select-none"
                :key="day"
              >
                {{ day }}
              </div>
              <button
                v-for="(day, index) in days"
                :key="day === null ? `empty-${index}` : day"
                @click="selectDay({ day })"
                :class="[
                  'h-8 w-8 rounded-full select-none text-sm inset-shadow-2xs inset-shadow-white/20  outline-0 focus-visible:ring-2 ring-green-500 ring-offset-2',
                  {
                    'bg-green-500 text-white hover:bg-green-600 border border-green-600 cursor-pointer':
                      selectedDate &&
                      day === selectedDate.getDate() &&
                      currentDate.getMonth() === selectedDate.getMonth() &&
                      currentDate.getFullYear() === selectedDate.getFullYear(),
                    'hover:bg-neutral-100 active:bg-neutral-200 border border-transparent hover:border-neutral-300 cursor-pointer':
                      day !== selectedDate.getDate() && day !== null,
                  },
                ]"
              >
                {{ day }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform-origin: top left;
  transition: all 0.15s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Month change slide animations */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.15s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
