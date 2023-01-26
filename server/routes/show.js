const router = require("express").Router();
const File = require("../models/fileModel");

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) return res.render("download", { error: "Link expired" });

    return res.render("download", {
      uuid: file.uuid,
      filename: file.filename,
      filesize: file.filesize,
      downloadlink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
    });
  } catch (error) {
    return res.render("download", { error: "No such files to download" });
  }
});

module.exports = router;
