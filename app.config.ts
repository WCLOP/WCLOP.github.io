export default defineAppConfig({
  brandTitle: "WCLOP - CVPR2025",
  title:
    import.meta.dev ?
      "Dev: CVPR WCLOP workshop" :
      "1st CVPR Workshop and Challenge on Category-Level Object Pose Estimation in the Wild",

  ui: {
    // define custom global ui classes
    global: {
      prose: 'prose lg:prose-lg dark:prose-invert'
    }
  }
});
