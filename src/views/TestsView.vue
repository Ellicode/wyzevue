<script setup lang="ts">
import { PlayIcon, StopCircleIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import VButton from '@/components/VButton.vue'
import VHeader from '@/components/VHeader.vue'
import VProgressRing from '@/components/VProgressRing.vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import VDropdown from '@/components/VDropdown.vue'
import VDropdownItem from '@/components/VDropdownItem.vue'
import {
  CheckCircleIcon as CheckCircleIconSolid,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/vue/20/solid'
</script>

<template>
  <VHeader headline="UT-TC0001" title="My test case">
    <template #avatar>
      <CheckCircleIcon class="w-8 h-8 text-green-500" />
    </template>
    <VDropdown position="right">
      <template #activator="{ toggle }">
        <VButton @click="toggle" type="filled">
          <template #prepend-icon>
            <PlayIcon class="w-5 h-5" />
          </template>
          Execute</VButton
        >
      </template>
      <VDropdownItem title="Completed">
        <template #prepend-icon>
          <CheckCircleIconSolid class="w-5 h-5 text-green-500" />
        </template>
      </VDropdownItem>
      <VDropdownItem title="In progress">
        <template #prepend-icon>
          <EllipsisHorizontalCircleIcon class="w-5 h-5 text-yellow-500" />
        </template>
      </VDropdownItem>
      <VDropdownItem title="Failed">
        <template #prepend-icon>
          <XCircleIcon class="w-5 h-5 text-red-500" />
        </template>
      </VDropdownItem>
      <VDropdownItem title="Not run">
        <template #prepend-icon>
          <StopCircleIcon class="w-5 h-5 text-neutral-500" />
        </template>
      </VDropdownItem>
    </VDropdown>
    <VProgressRing :progress="66" />
  </VHeader>
</template>
