module.exports = {
  content: ["src/**/*.html", "src/**/*.js", "src/**/*.md", "src/**/*.njk"],
  theme: {
    extend: {
      fontFamily: {
        mono: 'JetBrainsMono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        main: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        dosis: "Dosis, Roboto, sans-serif",
        inter: "Inter, Roboto, sans-serif",
        sf: "SF Pro Text, Roboto, sans-serif",
        fira: "Fira Sans, sans-serif",
      },
      colors: {
        "y-gray": "rgb(245,245,245)",
      },
    },
  },
  plugins: [],
};
