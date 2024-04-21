// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import("oh-my-live2d");
      loadOml2d({
        models: [
          {
            path: "https://model.oml2d.com/HK416-1-normal/model.json",
            position: [0, 60],
            scale: 0.08,
            stageStyle: {
              height: 450,
            },
          },
          {
            path: "https://model.oml2d.com/shizuku/shizuku.model.json",
            scale: 0.2,
            volume: 0,
            position: [70, 70],
            stageStyle: {
              height: 370,
              width: 400,
            },
          },
          {
            path: "https://model.oml2d.com/Senko_Normals/senko.model3.json",
            position: [-10, 20],
          },
          {
            path: "https://model.oml2d.com/Pio/model.json",
            scale: 0.4,
            position: [0, 50],
            stageStyle: {
              height: 300,
            },
          },
        ],
      });
    }
  },
} satisfies Theme;
