<template>
  <div v-if="caseData">
    <KnowledgeReviewMain :case-data="caseData" />
  </div>
  <div v-else class="flex items-center justify-center min-h-screen text-slate-400">
    找不到該案例
  </div>
</template>

<script setup lang="ts">
import { getCaseById } from '~/data/cases'

const route = useRoute()
const caseData = getCaseById(route.params.id as string)

useHead({
  title: caseData ? `${caseData.title} - 智慧時尚 Smart Fashion` : '案例詳情',
})
</script>
