<template>
  <div class="flex flex-col p-3 gap-2 w-80 border-e h-full border-neutral-200 bg-neutral-100">
    <slot />
    <div class="flex-1"></div>
    <slot name="footer" />
  </div>
</template>
