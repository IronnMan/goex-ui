<script lang="ts" setup>
import type { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'

AppSetup()

const app = useAppConfig() as AppConfigInput
useHead({
  title: app.name,
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/logo.png',
    },
  ],
})
</script>

<template>
  <Html>
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
