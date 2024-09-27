export default defineAppConfig({
  brandTitle: "CLOPE - CVPR",
  title:
    process.env.NODE_ENV === "production"
      ? "1st CVPR Workshop and Challenge on Category-Level Object Pose Estimation in the Wild"
      : "Dev: CVPR clope workshop",
});
