<script setup lang="ts">
interface ChildItem {
  label: string
  to: string
}

interface NavGroup {
  label: string
  children: ChildItem[]
}

defineProps<{
  title: string
  groups: NavGroup[]
  isOpen: boolean
}>()
</script>

<template>
  <div 
    v-if="isOpen"
    class="absolute left-0 right-0 top-full bg-white border-b border-gray-200 z-50 p-10 shadow-lg"
  >
    <div class="max-w-7xl mx-auto">
      <!-- 最上方大標題 -->
      <!-- <div class="mb-8 font-bold text-2xl text-gray-900">
        {{ title }}
      </div> -->

      <!-- 欄位佈局：由左至右 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div v-for="group in groups" :key="group.label" class="flex flex-col">
          <!-- 項目群組標籤 (Label) -->
          <h3 class="font-bold text-gray-900 mb-4 text-base uppercase tracking-wider">
            {{ group.label }}
          </h3>
          
          <!-- 子項目內容：呈現為一直行 -->
          <div class="flex flex-col space-y-3">
            <NuxtLink
              v-for="child in group.children"
              :key="child.label"
              :to="child.to"
              class="text-gray-500 hover:text-blue-600 transition-colors text-sm"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
