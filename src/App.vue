<script setup lang="ts">
import {
  BellIcon,
  ChartPieIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  HomeIcon,
} from '@heroicons/vue/20/solid'
import VSidebar from './components/VSidebar.vue'
import VSidebarItem from './components/VSidebarItem.vue'
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden">
    <VSidebar>
      <VSidebarItem title="Home" :to="{ name: 'home' }">
        <template #prepend-icon>
          <HomeIcon class="w-5 h-5 mx-0.5 text-neutral-500" />
        </template>
      </VSidebarItem>
      <VSidebarItem title="Notifications">
        <template #prepend-icon>
          <BellIcon class="w-5 h-5 mx-0.5 text-neutral-500" />
        </template>
      </VSidebarItem>
      <VSidebarItem title="Project 1">
        <template #prepend-icon>
          <div
            class="w-6 h-6 shrink-0 bg-teal-500 border border-teal-600 rounded-full text-[0.7rem] text-white flex items-center justify-center"
          >
            P1
          </div>
        </template>
      </VSidebarItem>
      <VSidebarItem :is-children="true" title="Dashboard">
        <template #prepend-icon>
          <ChartPieIcon class="w-5 h-5 mx-0.5 text-neutral-500" />
        </template>
      </VSidebarItem>
      <VSidebarItem :to="{ name: 'test' }" :is-children="true" title="Test labs">
        <template #prepend-icon>
          <CheckCircleIcon class="w-5 h-5 mx-0.5 text-neutral-500" />
        </template>
      </VSidebarItem>
      <VSidebarItem :is-children="true" title="Defects">
        <template #prepend-icon>
          <ExclamationTriangleIcon class="w-5 h-5 mx-0.5 text-neutral-500" />
        </template>
      </VSidebarItem>
    </VSidebar>
    <div class="overflow-auto flex-1">
      <main class="p-10 mb-[1000px] max-w-7xl mx-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
