# version
- node v18.14.0
- yarn 1.22.19

# 環境構築時のメモ
[参考 ](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/summary)
## vite から vue3(Typescript) プロジェクト作成
作成時コマンド
```bash
yarn create vite ./ --template vue-ts
```
または
```bash
yarn create vite
   project name?: .
   framework?: vue
   variant?: typescript
```
のち
```bash
yarn install
yarn dev
```
## vue3 vite の storybook導入
```bash
yarn add -D storybook@7
yarn add -D @storybook/vue3-vite@7
```
から最新選択
storybook には React が使用されているため 別途 React のインストールが必要
```bash
yarn add -D react react-dom
```
## storybook設定
[参考 ](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/create_main_js)
.storybook/main.ts 作成 (.storybookディレクトリ勝手に作成から)
```typescript
import { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.stories.@(js|ts)"],
};

export default config;
```
[その他アドオンの追加](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/what_is_addon)
必要に応じてでもいいし一括(addon-essentials)でも良い 今回は一括 めんどいので
'@storybook/addon-docs' とかは含まなそう...

## アンビエント宣言の追加
[参考 ](https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/first_story)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
