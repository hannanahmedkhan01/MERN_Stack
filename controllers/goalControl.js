//const { route } = require("../routes/goalRoutes")

const asynchandler = require("express-async-handler");
const Goal = require("../models/goalModels");
const User = require("../models/userModels");








//@desc GET Goals
//@route GET /api/goals
//@access private

const getGoals = asynchandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id });

  res.status(200).json(goal);
});







//@desc POST Goals
//@route POST /api/goals
//@access private

const setGoals = asynchandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("Please enter text...");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.body.id,
  });

  res.status(200).json(goal);
});






//@desc UPDATE Goals
//@route UPDATE /api/goals/:id
//@access private

const updateGoals = asynchandler(async (req, res) => {
  //console.log('Params:', req.params); // Add this to log what you're getting

  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Please enter text...");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User unauthorized ");
  }

  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});








//@desc DElETE Goals
//@route DELETE /api/goals/:id
//@access private

const deleteGoals = asynchandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal NOT FOUND");
  }

  await goal.remove();
  //const deletedGoals = await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.param.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
