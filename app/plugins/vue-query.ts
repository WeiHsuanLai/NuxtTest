import { defineNuxtPlugin } from '#app'
import { VueQueryPlugin, QueryClient, hydrate, dehydrate, type DehydratedState } from '@tanstack/vue-query'
import { ref } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const vueQueryState = ref<DehydratedState | null>(null)

  // 1. 初始化 QueryClient
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000, // 預設 5 秒內不重複抓取
      },
    },
  })

  const options = { queryClient }

  // 2. 註冊 VueQueryPlugin
  nuxtApp.vueApp.use(VueQueryPlugin, options)

  // 3. 處理伺服器端渲染 (SSR) 與用戶端的水合 (Hydration)
  if (import.meta.server) {
    nuxtApp.hooks.hook('app:rendered', () => {
      vueQueryState.value = dehydrate(queryClient)
    })
  }

  if (import.meta.client) {
    hydrate(queryClient, vueQueryState.value)
  }

  return {
    provide: {
      queryClient,
    },
  }
})
