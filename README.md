# Nuxt 極簡入門模板

請參閱 [Nuxt 文件](https://nuxt.com/docs/getting-started/introduction) 以瞭解更多資訊。

## 安裝

請確保已安裝相依套件：

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 開發伺服器

啟動位於 `http://localhost:3000` 的開發伺服器：

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 生產環境

為生產環境建置應用程式：

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

在本機預覽生產環境建置：

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 專案結構

此專案遵循 Nuxt 4 的建議結構：

- `app/`: 應用程式的主要入口，包含 `app.vue`。
- `public/`: 存放靜態資源，如 `favicon.ico`、`robots.txt` 等。
- `nuxt.config.ts`: Nuxt 專案的設定檔。
- `tsconfig.json`: TypeScript 的設定檔。
- `.nuxt/`: Nuxt 自動生成的類型定義與快取檔案。

請查看 [部署文件](https://nuxt.com/docs/getting-started/deployment) 以獲取更多資訊。
