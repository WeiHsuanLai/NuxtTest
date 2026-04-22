<script setup lang="ts">
const megaMenuContent = {
  '商店': [
    {
      label: '軟體授權',
      children: [
        { label: '作業系統', to: '#' },
        { label: '開發工具', to: '#' },
        { label: '防毒軟體', to: '#' },
        { label: '辦公軟體', to: '#' }
      ]
    },
    {
      label: '硬體設備',
      children: [
        { label: '筆記型電腦', to: '#' },
        { label: '桌上型電腦', to: '#' },
        { label: '顯示器', to: '#' }
      ]
    },
    {
      label: '周邊配件',
      children: [
        { label: '鍵盤滑鼠', to: '#' },
        { label: '印表機', to: '#' },
        { label: '儲存裝置', to: '#' }
      ]
    }
  ],
  '解決方案': [
    {
      label: '企業服務',
      children: [
        { label: '雲端遷移', to: '#' },
        { label: '資安檢測', to: '#' },
        { label: '數據分析', to: '#' }
      ]
    },
    {
      label: '行業應用',
      children: [
        { label: '金融系統', to: '#' },
        { label: '智慧零售', to: '#' },
        { label: '智慧醫療', to: '#' }
      ]
    }
  ]
}

const navItems = ['商店', '解決方案', '關於我們', '聯絡我們']
const activeMenuLabel = ref<string | null>(null)
const activeGroups = computed(() => {
  return megaMenuContent[activeMenuLabel.value as keyof typeof megaMenuContent] || []
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
    @mouseleave="activeMenuLabel = null"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center h-16 items-center">
        <div class="flex space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item"
            to="#"
            class="px-2 py-2 text-gray-700 hover:text-blue-600 font-bold transition-colors flex items-center gap-1"
            @mouseenter="activeMenuLabel = item"
          >
            {{ item }}
            <UIcon 
              v-if="megaMenuContent[item as keyof typeof megaMenuContent]" 
              name="i-heroicons-chevron-down" 
              class="w-4 h-4" 
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <NavMegaMenu 
      :title="activeMenuLabel || ''"
      :groups="activeGroups" 
      :is-open="activeGroups.length > 0 && !!activeMenuLabel" 
    />
  </nav>
</template>
