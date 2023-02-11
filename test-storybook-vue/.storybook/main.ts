import { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.stories.@(js|ts)"],
  addons: [  // 使用するアドオンを追加
    // '@storybook/addon-docs', // docmentの自動生成 TODO:今後
    '@storybook/addon-essentials', // 一旦 一括
  ],
};

export default config;