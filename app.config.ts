export default defineAppConfig({
  brandTitle: "WCLOP - CVPR",
  title:
    process.env.NODE_ENV === "production"
      ? "1st CVPR Workshop and Challenge on Category-Level Object Pose Estimation in the Wild"
      : "Dev: CVPR WCLOP workshop",
  
  ui: {
    // define custom global ui classes
    global: {
      prose: 'prose lg:prose-lg dark:prose-invert'
    }
  }
});
