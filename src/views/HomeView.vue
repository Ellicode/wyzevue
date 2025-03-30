<script setup lang="ts">
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PaintBrushIcon,
  PlusIcon,
  SparklesIcon,
  UserPlusIcon,
  XCircleIcon,
} from '@heroicons/vue/16/solid'
import VButton from '@/components/VButton.vue'
import VIconButton from '@/components/VIconButton.vue'
import {
  TrashIcon,
  ArchiveBoxIcon,
  BugAntIcon,
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  RocketLaunchIcon,
  ShareIcon,
  XMarkIcon,
} from '@heroicons/vue/20/solid'
import VDropdown from '@/components/VDropdown.vue'
import VDropdownItem from '@/components/VDropdownItem.vue'
import VDropdownSeparator from '@/components/VDropdownSeparator.vue'
import VBadge from '@/components/VBadge.vue'
import VTextField from '@/components/VTextField.vue'
import { ref } from 'vue'
import VSelect from '@/components/VSelect.vue'
import VCheckbox from '@/components/VCheckbox.vue'
import VRadioButton from '@/components/VRadioButton.vue'
import VDatePicker from '@/components/VDatePicker.vue'
import VTooltip from '@/components/VTooltip.vue'
import VModal from '@/components/VModal.vue'
import VProgressRing from '@/components/VProgressRing.vue'
import VSpinner from '@/components/VSpinner.vue'
import VProgressBar from '@/components/VProgressBar.vue'
import VHeader from '@/components/VHeader.vue'
import VOTPField from '@/components/VOTPField.vue'
import VSidePanel from '@/components/VSidePanel.vue'
import VToolbar from '@/components/VToolbar.vue'
import VAlert from '@/components/VAlert.vue'

const selectItems = ref([
  { title: 'Option 1', value: 'option1' },
  { title: 'Option 2', value: 'option2' },
  { title: 'Option 3', value: 'option3' },
  { title: 'Option 4', value: 'option4' },
])

const radio = ref('option1')
const modal = ref(false)
const panel = ref(false)
const progress = ref(100)
const pword = ref('')
const toolbarOverlay = ref(false)
</script>

<template>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 mb-10 uppercase">
    Buttons
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VButton color="red"> Delete project</VButton>

    <VButton color="purple">
      <template #prepend-icon>
        <SparklesIcon class="w-4 h-4" />
      </template>
      Ask Theo</VButton
    >

    <VButton color="green"> New test</VButton>
    <VButton>
      Load file
      <template #append-icon>
        <ChevronDownIcon class="w-4 h-4" />
      </template>
    </VButton>
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VButton color="green" type="filled">Save</VButton>
    <VButton color="purple" type="filled">
      <template #prepend-icon>
        <PaintBrushIcon class="w-4 h-4" />
      </template>
      Generate...</VButton
    >
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VButton color="green" type="text">
      <template #prepend-icon>
        <CheckCircleIcon class="w-4 h-4" />
      </template>
      Passed</VButton
    >
    <VButton color="red" type="text">
      <template #prepend-icon>
        <XCircleIcon class="w-4 h-4" />
      </template>
      Failed</VButton
    >
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VButton size="sm"> Small</VButton>
    <VButton size="md"> Medium</VButton>
    <VButton size="lg"> Large</VButton>
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VButton :disabled="true"> Disabled </VButton>
    <VButton :loading="true"> Loading </VButton>
  </div>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Icon buttons
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VIconButton color="purple">
      <RocketLaunchIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton color="yellow">
      <BugAntIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton>
      <ArchiveBoxIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton>
      <XMarkIcon class="w-5 h-5" />
    </VIconButton>
  </div>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Dropdowns
  </div>
  <VDropdown>
    <template #activator="{ toggle }">
      <VButton @click="toggle">
        New test case
        <template #append-icon>
          <ChevronDownIcon class="w-4 h-4" />
        </template>
      </VButton>
    </template>
    <VDropdown>
      <template #activator="{ toggle }">
        <VDropdownItem title="From template" @click="toggle">
          <template #append-icon>
            <ChevronRightIcon class="w-4 h-4" />
          </template>
        </VDropdownItem>
      </template>
      <VDropdownItem title="Load from CSV" />
      <VDropdownItem title="Download template file" />
    </VDropdown>
    <VDropdownItem title="From scratch">
      <template #append-icon>
        <PlusIcon class="w-4 h-4" />
      </template>
    </VDropdownItem>
    <VDropdownItem title="With Theo" color="purple">
      <template #append-icon>
        <SparklesIcon class="w-4 h-4" />
      </template>
    </VDropdownItem>
    <VDropdownSeparator />
    <VDropdownItem title="Extract to CSV" />
  </VDropdown>
  <br />
  <VDropdown>
    <template #activator="{ toggle }">
      <VButton type="text" @click="toggle">
        Project 1
        <template #append-icon>
          <ChevronDownIcon class="w-4 h-4" />
        </template>
      </VButton>
    </template>
    <VDropdownItem title="Project 1" subtitle="Lorem ipsum dolor sit amet">
      <template #prepend-icon>
        <div
          class="w-6 h-6 shrink-0 bg-teal-500 border border-teal-600 rounded-full text-[0.7rem] text-white flex items-center justify-center"
        >
          P1
        </div>
      </template>
      <template #append-icon>
        <CheckIcon class="w-4 h-4 text-neutral-500" />
      </template>
    </VDropdownItem>
    <VDropdownItem title="Project 2" subtitle="Lorem ipsum dolor sit amet">
      <template #prepend-icon>
        <div
          class="w-6 h-6 shrink-0 bg-yellow-500 border border-yellow-600 rounded-full text-[0.7rem] text-white flex items-center justify-center"
        >
          P2
        </div>
      </template>
    </VDropdownItem>
    <VDropdownItem title="Project 3" subtitle="Lorem ipsum dolor sit amet">
      <template #prepend-icon>
        <div
          class="w-6 h-6 shrink-0 bg-purple-500 border border-purple-600 rounded-full text-[0.7rem] text-white flex items-center justify-center"
        >
          P3
        </div>
      </template>
    </VDropdownItem>
  </VDropdown>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Alerts
  </div>
  <VAlert
    color="purple"
    title="A new home for your defects"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores odit laboriosam quas laborum sequi distinctio consequatur! Veritatis accusantium pariatur magnam asperiores, quis fugit reiciendis at sequi modi labore eos."
  >
    <template #actions>
      <VButton color="purple" type="filled">Okay, got it</VButton>
    </template>
  </VAlert>
  <VAlert color="yellow" title="Activate 2FA your account for added security" />
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Badges
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VBadge color="green" type="text"> Passed</VBadge>
    <VBadge color="red" type="text"> Failed</VBadge>
    <VBadge color="purple">
      <template #prepend-icon>
        <SparklesIcon class="w-4 h-4" />
      </template>
      New</VBadge
    >
    <VBadge color="yellow">Late</VBadge>
    <VBadge type="outlined">
      <template #prepend-icon>
        <UserPlusIcon class="w-4 h-4" />
      </template>
      Assigned to me</VBadge
    >
  </div>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Form controls
  </div>
  <VTextField label="Username" />
  <VTextField
    :minLength="8"
    label="Password"
    type="password"
    hint="Should be at least 8 characters long"
  />
  <VSelect label="Select an option" :items="selectItems" />
  <VSelect
    label="Select another option"
    :filter="true"
    :show-footer="true"
    :items="selectItems"
    :multiple="true"
  />
  <VCheckbox title="Remember me" subtitle="Lorem ipsum dolor sit amet" />
  <VRadioButton
    title="Option 1"
    subtitle="Lorem ipsum dolor sit amet"
    value="option1"
    v-model="radio"
  />
  <VRadioButton
    title="Option 2"
    subtitle="Lorem ipsum dolor sit amet"
    value="option2"
    v-model="radio"
  />
  <VRadioButton
    title="Option 3"
    subtitle="Lorem ipsum dolor sit amet"
    value="option3"
    v-model="radio"
  />
  <VOTPField
    :length="6"
    label="Enter verification code"
    hint="We sent a 6-digit code to your email address"
  />
  <VDatePicker label="Choose project end date" />
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Tooltips
  </div>
  <VTooltip content="This is a tooltip">
    <VButton color="yellow" type="filled"> Hello, world! </VButton>
  </VTooltip>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Modals
  </div>
  <div class="flex items-center gap-3 mb-5">
    <VModal title="Create new project" v-model="modal">
      <template #activator="{ toggle }">
        <VButton @click="toggle">Modal from activator slot</VButton>
      </template>
      <p class="text-neutral-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolores saepe tempora
        commodi molestias nisi assumenda ipsam odio iste similique nostrum, ipsum cupiditate quod
        maxime temporibus reiciendis sequi voluptatem sunt! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laudantium delectus, vero deserunt, rerum laboriosam nihil maiores
        reprehenderit unde obcaecati culpa pariatur provident natus cum voluptates harum minus,
        tenetur tempore rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi
        facilis possimus? Quis consequatur consectetur doloremque quibusdam non repellat aperiam
        earum, nostrum exercitationem esse, quisquam veritatis dolorum magnam sed ipsa.
      </p>
      <template #footer="{ close }">
        <VButton @click="close">Cancel</VButton>
        <VButton color="green" type="filled" @click="close">Save</VButton>
      </template>
    </VModal>
    <VButton @click="modal = !modal">Modal from v-model</VButton>
    <VSidePanel title="Create new project" v-model="panel">
      <template #activator="{ toggle }">
        <VButton @click="toggle">Panel from activator slot</VButton>
      </template>
      <p class="text-neutral-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolores saepe tempora
        commodi molestias nisi assumenda ipsam odio iste similique nostrum, ipsum cupiditate quod
        maxime temporibus reiciendis sequi voluptatem sunt! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Laudantium delectus, vero deserunt, rerum laboriosam nihil maiores
        reprehenderit unde obcaecati culpa pariatur provident natus cum voluptates harum minus,
        tenetur tempore rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi
        facilis possimus? Quis consequatur consectetur doloremque quibusdam non repellat aperiam
        earum, nostrum exercitationem esse, quisquam veritatis dolorum magnam sed ipsa.
      </p>
      <template #footer="{ close }">
        <VButton @click="close">Cancel</VButton>
        <VButton color="green" type="filled" @click="close">Save</VButton>
      </template>
    </VSidePanel>
    <VButton @click="panel = !panel">Panel from v-model</VButton>
  </div>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Progress indicators
  </div>
  <div class="flex items-center gap-5 mb-10">
    <VProgressRing :progress="progress" />
    <VButton @click="progress = progress === 100 ? 0 : 100">Toggle progress</VButton>
    <VSpinner />
  </div>
  <VProgressBar :progress="progress" />
  <br />
  <VTextField
    label="Password"
    type="password"
    v-model="pword"
    hint="Should be at least 8 characters long"
  />
  <VProgressBar :steps="5" :progress="(pword.length / 8) * 100" />
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Headers
  </div>
  <VHeader
    title="Tailwind UI, inc."
    avatar="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
    :to="{
      name: 'test',
    }"
    headline="Order #10392"
  >
    <VButton type="filled">Click me!</VButton>
    <VDropdown position="right">
      <template #activator="{ toggle }">
        <VIconButton @click="toggle" size="sm">
          <EllipsisVerticalIcon class="w-5 h-5" />
        </VIconButton>
      </template>
      <VDropdownItem title="Option 1" />
      <VDropdownItem title="Option 2" />
      <VDropdownItem color="red" title="Option 3 (destructive)" />
    </VDropdown>
  </VHeader>
  <div class="text-sm tracking-wider font-mono select-none text-neutral-500 my-10 uppercase">
    Toolbars
  </div>
  <VToolbar>
    <VIconButton color="red" label="Delete">
      <TrashIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton label="Share">
      <ShareIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton label="Duplicate">
      <DocumentDuplicateIcon class="w-5 h-5" />
    </VIconButton>
    <VDropdown position="right">
      <template #activator="{ toggle }">
        <VIconButton @click="toggle" label="More options">
          <EllipsisVerticalIcon class="w-5 h-5" />
        </VIconButton>
      </template>
      <VDropdownItem title="Option 1" />
      <VDropdownItem title="Option 2" />
      <VDropdownItem title="Option 3" />
    </VDropdown>
  </VToolbar>
  <VButton @click="toolbarOverlay = !toolbarOverlay">Toggle toolbar overlay</VButton>
  <VToolbar v-model="toolbarOverlay" overlay>
    <VIconButton color="red" label="Delete">
      <TrashIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton label="Share">
      <ShareIcon class="w-5 h-5" />
    </VIconButton>
    <VIconButton label="Duplicate">
      <DocumentDuplicateIcon class="w-5 h-5" />
    </VIconButton>
    <VDropdown position="top-right">
      <template #activator="{ toggle }">
        <VIconButton @click="toggle" label="More options">
          <EllipsisVerticalIcon class="w-5 h-5" />
        </VIconButton>
      </template>
      <VDropdownItem title="Option 1" />
      <VDropdownItem title="Option 2" />
      <VDropdownItem title="Option 3" />
    </VDropdown>
  </VToolbar>
</template>
