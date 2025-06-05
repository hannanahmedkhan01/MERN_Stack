const express = require("express");
const router = express.Router();
const { getGoals } = require("../controllers/goalControl");

router.get("/", getGoals);
router.post("/", (req, res) => {
  res.status(200).json({ message: "CREATE goal" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `UPDATE goal${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `DELETE goal ${req.params.id}` });
});

module.exports = router;
