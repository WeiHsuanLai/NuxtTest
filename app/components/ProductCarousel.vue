<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6',
  'https://picsum.photos/640/640?random=7',
  'https://picsum.photos/640/640?random=8',
  'https://picsum.photos/640/640?random=9',
  'https://picsum.photos/640/640?random=10',
  'https://picsum.photos/640/640?random=11',
  'https://picsum.photos/640/640?random=12'
]
</script>

<template>
  <div class="relative group">
    <UCarousel
      v-slot="{ item, index }"
      :items="items"
      arrows
      dots
      :options="{
        loop: false,
        align: 'start'
      }"
      :ui="{
        item: 'basis-full md:basis-1/4 lg:basis-1/6 shrink-0 px-2',
        viewport: 'px-2 -mx-2',
        container: 'flex py-4',
        dots: 'absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3 md:hidden',
        prev: 'hidden md:flex left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-900 items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none [&_*]:!size-6',
        next: 'hidden md:flex right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-900 items-center justify-center transition-all disabled:opacity-0 disabled:pointer-events-none [&_*]:!size-6'
      }"
    >
      <img
        :src="item"
        :alt="`產品圖片 ${index + 1}`"
        class="w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        loading="lazy"
        draggable="false"
      />
    </UCarousel>
  </div>
</template>
