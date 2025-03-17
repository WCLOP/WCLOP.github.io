export default defineAppConfig({
  brandTitle: "WCLOP - ICCV2025",
  title:
    import.meta.dev ?
      "Dev: ICCV WCLOP workshop" :
      "1st ICCV Workshop and Challenge on Category-Level Object Pose Estimation in the Wild",

  ui: {
    // define custom global ui classes
    global: {
      prose: 'prose lg:prose-lg dark:prose-invert'
    }
  }
});
