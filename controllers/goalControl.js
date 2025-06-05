//const { route } = require("../routes/goalRoutes")

const asynchandler = require("express-async-handler")

//@desc GET Goals
//@route GET /api/goals
//@access private

const getGoals = asynchandler(async(req, res) => {
if(!req.body.text){
    res.status(404)
    throw new Error("Please enter text...")
}

  res.status(200).json({ message: `GET goals` });
});
//@desc POST Goals
//@route POST /api/goals
//@access private

const setGoals = asynchandler(async(req, res) => {
  res.status(200).json({ message: `CREATED goals` });
});
//@desc UPDATE Goals
//@route UPDATE /api/goals/:id
//@access private

const updateGoals = asynchandler(async(req, res) => {
  res.status(200).json({ message: `UPDATE goal ${req.params.id}` });
});
//@desc DElETE Goals
//@route DELETE /api/goals
//@access private

const deleteGoals = asynchandler(async(req, res) => {
  res.status(200).json({ message: `DELETE goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
