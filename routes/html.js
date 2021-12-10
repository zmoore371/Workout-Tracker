const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join__dirname, "../public/index.html")
})