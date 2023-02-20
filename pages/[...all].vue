<script setup lang="ts">
import { capitalize } from '~~/utils/str'

const router = useRouter()
const { t } = useLang()

useHead(() => ({
  title: capitalize(t('pages.404.title')),
}))
</script>

<template>
  <PageWrapper class="flex flex-col items-center justify-center">
    <Error :code="404" />
  </PageWrapper>
</template>
