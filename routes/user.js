let express = require("express");
let router = express.Router();

router.get("/:id", (req, res) => {
    res.send("Received a GET Request, param:" + req.params.id);
});

router.post("/", (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ success: true, user: req.body.username });
});

router.put("/", (req, res) => {
    res.status(400).json({ message: "Hey, you. Bad Request!" });
});

router.delete("/", (req, res) => {
    res.send("Received a DELETE Request");
});

module.exports = router;
