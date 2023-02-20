<script lang="ts" setup>
import type { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer class="border-t lg:border-gray900/10 dark:border-gray-50/[0.2]">
    <section class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20">
      <div class="w-full py-4 text-center">
        <div class="mb-1">
          {{ app.name }}
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright &copy; 2022 {{ app.name }}.  All rights reserved.
        </div>
      </div>
    </section>
  </footer>
</template>
