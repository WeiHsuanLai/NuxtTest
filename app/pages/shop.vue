<script setup lang="ts">
</script>

<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="flex flex-col md:flex-row md:items-center justify-between mb-10">
			<div>
				<h1 class="text-5xl font-bold tracking-tight text-gray-900">商店</h1>
			</div>

			<div class="mt-4 md:mt-0 text-left md:text-right space-y-2">
				<div>
					<p class="text-xl text-gray-500 font-bold leading-tight">購買你喜愛的產品，</p>
					<p class="text-xl text-gray-500 font-bold leading-tight">這是最好的方式。</p>
				</div>

				<div class="flex flex-col md:items-end space-y-1">
					<a href="#" class="text-blue-600 hover:underline flex items-center gap-0.5 justify-start md:justify-end text-sm font-medium">
						洽詢專員
						<UIcon name="i-heroicons-arrow-up-right-16-solid" class="w-4 h-4" />
					</a>
					<a href="#" class="text-blue-600 hover:underline flex items-center gap-0.5 justify-start md:justify-end text-sm font-medium">
						尋找 Apple 直營店
						<UIcon name="i-heroicons-arrow-up-right-16-solid" class="w-4 h-4" />
					</a>
				</div>
			</div>
		</div>

    <!-- 商品輪播 -->
		<ProductCarousel />
	</div>
</template>
